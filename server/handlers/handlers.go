package handlers

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"npcmastersmith/mocks"
	"npcmastersmith/models"

	"github.com/gofiber/fiber/v2"
)

func PostCharacter(c *fiber.Ctx, db *sql.DB) error {
	// Initialize new prompt variable
	p := new(models.Prompt)

	// Parse the request body to p
	if err := c.BodyParser(p); err != nil {
		return err
	}

	// Create an LLM instance
	llm := mocks.LLM{Model: "llama2", Llamacpp: "path/to/llama.cpp", Ngl: 30}

	// Mock-prompt the model and store the response
	llmresponses, _ := llm.PromptModel([]string{p.Prompt})

	// Create new character instance
	character := new(models.Character)

	// Parse the json body to the character instance
	json.Unmarshal([]byte(llmresponses[0]), &character)

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
