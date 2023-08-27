package handlers

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"npcmastersmith/models"
	"npcmastersmith/utils"
	"strings"

	"github.com/CenturySturgeon/gollama"
	"github.com/gofiber/fiber/v2"
)

// GetNewCharacter handler prompts the llm for a new character and redirects the user to an html page with the editable character card.
func GetNewCharacter(c *fiber.Ctx, llm *gollama.LLM) error {
	// Initialize new prompt variable
	p := new(models.Prompt)

	// Extracts the user prompt from the GET request body
	p.Prompt = c.Query("prompt")

	// Add the instruction block for the LLM so it becomes a character creator
	instructionBlock := ` <s>[INST] <<SYS>>You're a Dungeons and Dragons character creator. All your responses must only contain JSON format following the template: {"Name": "Name of the character (additional nicknames must be inside parenthesis)","Appearance": "Physical description of the character","Quote": "A quote or phrase the character would say","Roleplay": ["Distintive character trait", "Another distintive character trait", "Yet another distintive character trait"]} <</SYS>>`

	// Mock-prompt the model and store the response(s)
	llmresponse, _ := utils.JsonCharacter(p, instructionBlock, llm)

	// Create new character instance
	character := new(models.Character)

	// Parse the json body to the character instance
	json.Unmarshal([]byte(llmresponse), &character)

	return c.Render("character", fiber.Map{
		"Title":       "Edit Your Character",
		"Description": "Edit or approve your character",
		"cssPaths":    []string{"/esbundle/character.css"},
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

	return GetCharacters(c, db)
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
		"cssPaths":    []string{"/esbundle/characters.css"},
		"jsPaths":     []string{""},
		"Characters":  characters,
	}, "base")
}
