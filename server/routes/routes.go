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

	// All the index routes should return the index html file to let the client side do the rendering
	indexRoutes := []string{"/", "/characters", "/newcharacter"}

	// Assign index routes to return the index file
	for _, route := range indexRoutes {
		server.App.Get(route, func(c *fiber.Ctx) error {
			return c.Render("index", fiber.Map{})
		})
	}

	server.App.Post("/postCharacter", func(c *fiber.Ctx) error {
		return handlers.PostCharacter(c, server.Db)
	})

	server.App.Put("/putCharacter", func(c *fiber.Ctx) error {
		return handlers.PutCharacter(c, server.Db)
	})

	server.App.Delete("/deleteCharacter", func(c *fiber.Ctx) error {
		return handlers.DeleteCharacter(c, server.Db)
	})

	server.App.Get("/getcharacters", func(c *fiber.Ctx) error {
		return handlers.GetCharacters(c, server.Db)
	})

	server.App.Post("/postPrompt", func(c *fiber.Ctx) error {
		return handlers.PostCharacterPrompt(c, server.LLM)
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
