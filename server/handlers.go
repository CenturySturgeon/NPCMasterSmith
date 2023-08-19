package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"npcmastersmith/models"

	"github.com/gofiber/fiber/v2"
)

func postCharacter(c *fiber.Ctx, db *sql.DB) error {
	// Initialize new prompt variable
	p := new(models.Prompt)

	// Parse the request body to p
	if err := c.BodyParser(p); err != nil {
		return err
	}

	fmt.Print("PROMPT: ", p.Prompt)

	llmresponse := "{\"Name\": \"Gargauth (Once-treasurer of hell, the Tenth Lord of the nine, Lost lord of the pit)\", \"Appearance\": \"A shield of silvered, vanadium steel, embelished with bronze decorations suggesting the horns, eyes and fangs of a pit fiend.\", \"Quote\": \"You have no idea of the secrets which I could share with you! If you would only serve me!\", \"Roleplay\": [\"Wants nothing more than to be released from his prision.\", \"Craves power, with little care for what it takes.\", \"Speaks in either a siblant, seductive whisper or a baritone roar.\"]}"

	// Create new character instance
	character := new(models.Character)

	// Parse the json body to the character instance
	json.Unmarshal([]byte(llmresponse), &character)

	fmt.Println("Character: ", character.Name, " ", character.Appearance, " ", character.Quote, " ", character.Roleplay)

	table := "characters"
	query := fmt.Sprintf("INSERT INTO %s (Name, Appearance, Quote, Roleplay) VALUES ($1,$2, $3, $4)", table)

	// Since the characters table specifies the Rolplay cloumn as jsonb, the character's roleplay slice is turned back into a JSON array
	roleplayJsonArray, _ := json.Marshal(character.Roleplay)

	// Execute the insertion query
	_, err := db.Exec(query, character.Name, character.Appearance, character.Quote, roleplayJsonArray)
	if err != nil {
		log.Fatalf("An error occured while executing query: %v", err)
	}

	return c.SendString("Prompt processed")
}
