package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

// type server struct {
// 	db     *someDatabase
// 	router *someRouter
// }

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	log.Fatal(app.Listen(":3000"))
}
