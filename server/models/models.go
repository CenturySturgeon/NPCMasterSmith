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
	ID         int      `db:"id" json:"Id" xml:"Id" form:"Id"`
	Campaign   string   `db:"campaign" json:"Campaign" xml:"Campaign" form:"Campaign"`
	Image      string   `db:"image" json:"Image" xml:"Image" form:"Image"`
	Name       string   `db:"name" json:"Name" xml:"Name" form:"Name"`
	Quote      string   `db:"quote" json:"Quote" xml:"Quote" form:"Quote"`
	Appearance string   `db:"appearance" json:"Appearance" xml:"Appearance" form:"Appearance"`
	Roleplay   []string `db:"roleplay" json:"Roleplay" xml:"Roleplay" form:"Roleplay"`
}
