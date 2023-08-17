package main

import (
	"encoding/json"
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func setRoutes(server *Server) {

	server.App.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title":       "NPC Master Smith",
			"Description": "Create NPC Characters For Your Campaigns",
			"cssPaths":    []string{"/esBundle/base.css"},
			"jsPaths":     []string{"/esbundle/Application.js"},
		}, "base")
	})

	server.App.Get("/characters", func(c *fiber.Ctx) error {
		return c.Render("characters", fiber.Map{
			"Title":       "NPC Master Smith | Characters",
			"Description": "All Your Characters In One Place",
			"cssPaths":    []string{"/esBundle/characters.css"},
			"jsPaths":     []string{""},
			"Characters":  []fiber.Map{{"Name": "Osacar"}, {"Name": "Juan"}, {"Name": "Juan Carlos"}},
		}, "base")
	})

	server.App.Post("/prompt", func(c *fiber.Ctx) error {
		return postCharacter(c, server.Db)
	})

	server.App.Get("/testPromptBuffering", func(c *fiber.Ctx) error {
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

	server.App.Get("/testPrompt", func(c *fiber.Ctx) error {
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
