package main

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
)

type Prompt struct {
	Prompt string `json:"prompt" xml:"prompt" form:"prompt"`
}

func setRoutes(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "NPC Master Smith",
		})
	})

	app.Post("/prompt", func(c *fiber.Ctx) error {
		// Initialize new prompt variable
		p := new(Prompt)

		// Parse the request body to p
		if err := c.BodyParser(p); err != nil {
			return err
		}

		fmt.Print("PROMPT: ", p.Prompt)

		time.Sleep(10 * time.Second)
		return c.SendString("Prompt processed")
	})

	app.Get("/testPromptBuffering", func(c *fiber.Ctx) error {
		llm := LLM{Model: "My model", Llamacpp: "My llama.cpp instance", Ngl: 10}
		outputChan := make(chan string)

		go llm.mockBufferPromptModel("test string", outputChan)

		outputText := ""
		for char := range outputChan {
			fmt.Print(char)
			outputText += string(char)
		}

		return c.SendString("Testing prompt buffering...")
	})

	app.Get("/testPrompt", func(c *fiber.Ctx) error {
		llm := LLM{Model: "My model", Llamacpp: "My llama.cpp instance", Ngl: 10}

		jsonStringArray, err := llm.mockPromptModel([]string{"test string"})

		// Declare a slice of maps
		var responsesArray []map[string]interface{}

		if err != nil {
			fmt.Println("Error on prompt: ", err)
		}

		for _, response := range jsonStringArray {

			fmt.Println(response)

			data := make(map[string]interface{})

			// Unmarshal the JSON string into the map
			err := json.Unmarshal([]byte(response), &data)
			if err != nil {
				fmt.Println("Error:", err)
			}

			responsesArray = append(responsesArray, data)
		}

		fmt.Println(responsesArray[0])

		return c.SendString("Testing propmting...")
	})

}
