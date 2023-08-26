package utils

import (
	"database/sql"
	"errors"
	"log"
	"npcmastersmith/models"
	"os"
	"strings"

	"github.com/CenturySturgeon/gollama"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

// ExtractJson function extracts the JSON body inside a string and returns it alongside its error.
func ExtractJson(s string) (string, error) {
	if strings.Contains(s, "{") && strings.Contains(s, "}") {
		// Define the variables for the json slice start and end indexes, as well as a variable to specify the start of the json body withing the string
		var startIndex, endIndex int
		var counter = 0
		var startJson = false

		// Loop through the string bytes to find the json body within the string
		for index, character := range s {
			// This code block is only performed when the start of a json body has been determined
			if startJson {
				// Basically, a counter is set to determine how many opening keys are there and if they're balanced by the closing keys
				if string(character) == "{" {
					// Opening keys add to the counter
					counter += 1
				} else if string(character) == "}" {
					// Closing keys substract to the counter
					counter -= 1
				}
				// when the opening and closing keys are balanced it means that the json body is closed
				if counter == 0 {
					endIndex = index
					// Extract the JSON portion from the string
					jsonPortion := s[startIndex : endIndex+1]
					return jsonPortion, nil
				}
			}
			// If the character == '{' it means that from that index onwards there is a json body
			if string(character) == "{" && startJson == false {
				startJson = true
				startIndex = index
				counter += 1
			}
		}
	}

	// If the loop is completed and there was no closure, or there are no {} characters in the string, then it means there is no valid json body in the string
	return "", errors.New("No valid JSON found in input")
}

// NewServer function creates a new server instance. A server instance has a fiber.App, a sql.DB, and a LLM as its properties. However the LLM isn't defined in this function for modularity.
func NewServer() *models.Server {
	// Initialize standard Go html template engine
	engine := html.New("../views", ".html")

	// Create new instance of a fiber app
	app := fiber.New(fiber.Config{
		AppName: "NPC Master Smith",
		Views:   engine,
	})

	// Get the postgres password from the environment variables
	postgrespw := os.Getenv("POSTGRESPW")

	// Create the connection string and connect to the npcms database
	conStr := "postgresql://postgres:" + postgrespw + "@localhost/npcms?sslmode=disable"
	db, errDb := sql.Open("postgres", conStr)
	if errDb != nil {
		log.Fatal(errDb)
	}

	// Create server instance
	server := models.Server{App: app, Db: db}

	return &server
}

// NewLLM function creates a gollama LLM instance using the relative path to Llama.cpp and the environment variable MODELPATH to set the LLM's model and Llama.cpp running instance.
func NewLLM(ngl int) gollama.LLM {
	// Having AI LLMs lying around is memory consuming, it is best to have them all in a folder and call them with absolute paths
	modelPath := os.Getenv("MODELPATH")
	if modelPath == "" {
		modelPath = "../ai/models/openorca-platypus2-13b.ggmlv3.q6_K.bin"
	}

	// Create an LLM instance
	llm := gollama.LLM{Llamacpp: "../ai/llama.cpp", Model: modelPath, Ngl: ngl}
	// It appears that the command to communicate with the model is executed at the server.go level, so the relative paths must refelct this

	return llm
}

// JsonCharacter function prompts the LLM and returns the character in json format
func JsonCharacter(p *models.Prompt, instructionBlock string, llm gollama.LLM) (string, error) {

	// Set the LLM's instruction block
	llm.InstructionBlock = instructionBlock

	// Prompt the model and store the response(s)
	llmresponses, err := llm.PromptModel([]string{p.Prompt})

	if err != nil {
		return "", err
	}

	// Extract the json response from the character
	jsonResponse, err := ExtractJson(llmresponses[0])

	if err != nil {
		return "", err
	}

	return jsonResponse, nil
}
