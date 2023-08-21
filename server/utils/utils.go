package utils

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"npcmastersmith/models"
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

// ExtractJson function extracts the JSON body inside a string and returns it alongside its error.
func ExtractJson(s string) (string, error) {
	// Find the starting and ending positions of the JSON portion
	startIndex := strings.Index(s, "{")
	endIndex := strings.LastIndex(s, "}")
	if startIndex == -1 || endIndex == -1 || startIndex >= endIndex {
		fmt.Println("No valid JSON found in input")
		var err error = errors.New("No valid JSON found in input")
		return "", err
	}

	// Extract the JSON portion from the string
	jsonPortion := s[startIndex : endIndex+1]

	return jsonPortion, nil
}

// NewServer function creates a new server instance. A server instance has a fiber.App and a sql.DB as its fields.
func NewServer() *models.Server {
	// Initialize standard Go html template engine
	engine := html.New("../views", ".html")

	// Create new instance of a fiber app
	app := fiber.New(fiber.Config{
		AppName: "NPC Master Smith",
		Views:   engine,
	})

	// Get the postgres password from the environment variables
	postgrespw := os.Getenv("postgrespw")

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
