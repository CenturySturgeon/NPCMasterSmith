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
	engine := html.New("./views", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{})
	})

	log.Fatal(app.Listen(":3000"))
}
