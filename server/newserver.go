package main

import (
	"database/sql"
	"log"
	"npcmastersmith/models"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

// NewServer function creates a new server instance. A server instance has a fiber.App, a sql.DB, and a LLM as its properties. However the LLM isn't defined in this function for modularity.
func newServer() *models.Server {
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
