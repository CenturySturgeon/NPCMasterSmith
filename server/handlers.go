package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
)

type Prompt struct {
	Prompt string `json:"prompt" xml:"prompt" form:"prompt"`
}

type Character struct {
	Name       string   `json:"Name" xml:"Name" form:"Name"`
	Appearance string   `json:"Appearance" xml:"Appearance" form:"Appearance"`
	Quote      string   `json:"Quote" xml:"Quote" form:"Quote"`
	Roleplay   []string `json:"Roleplay" xml:"Roleplay" form:"Roleplay"`
}

func postCharacter(c *fiber.Ctx, db *sql.DB) error {
	// Initialize new prompt variable
	p := new(Prompt)

	// Parse the request body to p
	if err := c.BodyParser(p); err != nil {
		return err
	}

	fmt.Print("PROMPT: ", p.Prompt)

	llmresponse := "{\"Name\": \"Gargauth (Once-treasurer of hell, the Tenth Lord of the nine, Lost lord of the pit)\", \"Appearance\": \"A shield of silvered, vanadium steel, embelished with bronze decorations suggesting the horns, eyes and fangs of a pit fiend.\", \"Quote\": \"You have no idea of the secrets which I could share with you! If you would only serve me!\", \"Roleplay\": [\"Wants nothing more than to be released from his prision.\", \"Craves power, with little care for what it takes.\", \"Speaks in either a siblant, seductive whisper or a baritone roar.\"]}"

	// Create new character instance
	character := new(Character)

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

	time.Sleep(10 * time.Second)
	return c.SendString("Prompt processed")
}
