package routes

import (
	"encoding/json"
	"fmt"
	"npcmastersmith/handlers"
	"npcmastersmith/mocks"
	"npcmastersmith/models"

	"github.com/gofiber/fiber/v2"
)

func SetRoutes(server *models.Server) {

	server.App.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title":       "NPC Master Smith",
			"Description": "Create NPC Characters For Your Campaigns",
			"cssPaths":    []string{"/esBundle/base.css"},
			"jsPaths":     []string{"/esbundle/Application.js"},
		}, "base")
	})

	server.App.Post("/postCharacter", func(c *fiber.Ctx) error {
		return handlers.PostCharacter(c, server.Db)
	})

	server.App.Get("/characters", func(c *fiber.Ctx) error {
		return handlers.GetCharacters(c, server.Db)
	})

	server.App.Post("/prompt", func(c *fiber.Ctx) error {
		return handlers.PromptModel(c, server.LLM)
	})

	server.App.Get("/testPromptBuffering", func(c *fiber.Ctx) error {
		llm := mocks.LLM{Model: "My model", Llamacpp: "My llama.cpp instance", Ngl: 10}
		outputChan := make(chan string)

		go llm.BufferPromptModel("test string", outputChan)

		outputText := ""
		for char := range outputChan {
			fmt.Print(char)
			outputText += string(char)
		}

		return c.SendString("Testing prompt buffering...")
	})

	server.App.Get("/testPrompt", func(c *fiber.Ctx) error {
		llm := mocks.LLM{Model: "My model", Llamacpp: "My llama.cpp instance", Ngl: 10}

		jsonStringArray, err := llm.PromptModel([]string{"test string"})

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
