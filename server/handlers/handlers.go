package handlers

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"npcmastersmith/mocks"
	"npcmastersmith/models"
	"strings"

	"github.com/gofiber/fiber/v2"
)

// PromptModel handler prompts the llm and redirects the user to an html page with the editable character card.
func PromptModel(c *fiber.Ctx) error {
	// Initialize new prompt variable
	p := new(models.Prompt)

	// Parse the request body to p
	if err := c.BodyParser(p); err != nil {
		return err
	}

	// Create an LLM instance
	llm := mocks.LLM{Model: "llama2", Llamacpp: "path/to/llama.cpp", Ngl: 30}

	// Mock-prompt the model and store the response(s)
	llmresponses, _ := llm.PromptModel([]string{p.Prompt})

	// Create new character instance
	character := new(models.Character)

	// Parse the json body to the character instance
	json.Unmarshal([]byte(llmresponses[0]), &character)

	return c.Render("character", fiber.Map{
		"Title":       "Edit Your Character",
		"Description": "Edit or approve your character",
		"cssPaths":    []string{"/esBundle/character.css"},
		"jsPaths":     []string{""},
		"Character":   character,
	}, "base")
}

// PostCharacter handler inserts the new character to the characters sql table.
func PostCharacter(c *fiber.Ctx, db *sql.DB) error {
	// Create new character instance
	character := new(models.Character)

	// Parse the request body to the character
	if err := c.BodyParser(character); err != nil {
		fmt.Println(err)
		return err
	}

	// Parse the json body to the character instance
	// json.Unmarshal([]byte(llmresponses[0]), &character)

	table := "characters"
	query := fmt.Sprintf("INSERT INTO %s (Name, Appearance, Quote, Roleplay) VALUES ($1,$2, $3, $4)", table)

	// Since the characters table specifies the Rolplay cloumn as jsonb, the character's roleplay slice is turned back into a JSON array
	roleplayJsonArray, _ := json.Marshal(character.Roleplay)

	// Execute the insertion query: Insert the new character
	_, err := db.Exec(query, character.Name, character.Appearance, character.Quote, roleplayJsonArray)
	if err != nil {
		log.Fatalf("An error occured while executing query: %v", err)
	}

	return c.SendString("Prompt processed")
}

func GetCharacters(c *fiber.Ctx, db *sql.DB) error {
	var x string
	var character models.Character
	var characters []models.Character

	// Get all characters stored on the DB
	rows, err := db.Query("SELECT * FROM characters")
	// Don't forget to close the DB connection
	defer rows.Close()

	if err != nil {
		log.Fatalln(err)
		return err
	}

	// Scan the rows and store them in characters in an array
	for rows.Next() {
		rows.Scan(&character.ID, &character.Name, &character.Appearance, &character.Quote, &x)
		// Character's roleplay is interpreted as a string by the sql.Scan; it needs to be transformed back to []string
		character.Roleplay = strings.Split(strings.Trim(x, "[]"), ",")
		characters = append(characters, character)
	}

	return c.Render("characters", fiber.Map{
		"Title":       "NPC Master Smith | Characters",
		"Description": "All Your Characters In One Place",
		"cssPaths":    []string{"/esBundle/characters.css"},
		"jsPaths":     []string{""},
		"Characters":  characters,
	}, "base")
}
