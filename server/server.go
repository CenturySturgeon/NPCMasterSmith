package main

import (
	"log"
	"npcmastersmith/routes"
	"npcmastersmith/utils"

	_ "github.com/lib/pq"
)

func main() {
	// Create server instance
	server := utils.NewServer()

	// Set up the static folder
	server.App.Static("/", "../public")

	// Set up all the routes handlers
	routes.SetRoutes(server)

	// Run the app
	log.Fatal(server.App.Listen(":8000"))
}
