package main

import (
	"fmt"
	"log"
	"npcmastersmith/routes"
	"npcmastersmith/utils"
	"os"

	_ "github.com/lib/pq"
)

func main() {
	// Create server instance
	server := utils.NewServer()

	// Set the server's LLM
	server.LLM = utils.NewLLM(30)

	// Set up the static folder
	server.App.Static("/", "../public")

	// Set up all the routes handlers
	routes.SetRoutes(server)

	// Port 8000 is default if the environment variable 'PORT' is not declared
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	// Run the app
	log.Fatal(server.App.Listen(fmt.Sprintf(":%v", port)))
}
