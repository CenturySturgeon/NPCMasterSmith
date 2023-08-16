package main

import (
	"log"

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

	// Set up the static folder
	app.Static("/", "../public")

	// Set up all the routes handlers
	setRoutes(app)

	// Run the app
	log.Fatal(app.Listen(":8000"))
}
