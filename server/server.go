package main

import (
	"database/sql"
	"fmt"
	"log"
	"npcmastersmith/models"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
	_ "github.com/lib/pq"
)

type Server struct {
	Db  *sql.DB
	App *fiber.App
}

func newServer() *Server {
	// Initialize standard Go html template engine
	engine := html.New("../views", ".html")

	x := models.Character{}
	fmt.Println(x)

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
	server := Server{App: app, Db: db}

	return &server
}

func main() {
	// Create server instance
	server := newServer()

	// Set up the static folder
	server.App.Static("/", "../public")

	// Set up all the routes handlers
	setRoutes(server)

	// Run the app
	log.Fatal(server.App.Listen(":8000"))
}
