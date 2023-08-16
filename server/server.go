package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/evanw/esbuild/pkg/api"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

// type server struct {
// 	db     *someDatabase
// 	router *someRouter
// }

func main() {

	// Initialize standard Go html template engine
	engine := html.New("../views", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	// Sets up esbuild to run in watch mode (Write option is vital)
	ctx, errCtx := api.Context(api.BuildOptions{
		EntryPoints:       []string{"../frontend/Application.tsx", "../frontend/esbuild.css"},
		Outdir:            "../public/esbundle/",
		Bundle:            true,
		Write:             true,
		MinifyWhitespace:  true,
		MinifyIdentifiers: true,
		MinifySyntax:      true,
	})

	if errCtx != nil {
		os.Exit(1)
	}

	errWtch := ctx.Watch(api.WatchOptions{})
	if errWtch != nil {
		fmt.Println(errWtch)
		os.Exit(1)
	}
	fmt.Println("		⚡ Esbuild Watching! ⚡")

	// Set up the static folder
	app.Static("/", "../public")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "NPC Master Smith",
		})
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

	// Returning from main() exits immediately in Go.
	// Block forever so we keep watching and don't exit (doesn't seem necessary when running a server).
	// <-make(chan struct{})

	// Run the app
	log.Fatal(app.Listen(":8000"))
}
