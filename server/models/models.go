package models

import (
	"database/sql"

	"github.com/CenturySturgeon/gollama"
	"github.com/gofiber/fiber/v2"
)

type Server struct {
	Db  *sql.DB
	App *fiber.App
	LLM *gollama.LLM
}

type Prompt struct {
	Prompt string `json:"prompt" xml:"prompt" form:"prompt"`
}

type Character struct {
	ID         int      `db:"id" json:"id" xml:"id" form:"id"`
	Name       string   `db:"name" json:"Name" xml:"Name" form:"Name"`
	Appearance string   `db:"appearance" json:"Appearance" xml:"Appearance" form:"Appearance"`
	Quote      string   `db:"quote" json:"Quote" xml:"Quote" form:"Quote"`
	Roleplay   []string `db:"roleplay" json:"Roleplay" xml:"Roleplay" form:"Roleplay"`
}
