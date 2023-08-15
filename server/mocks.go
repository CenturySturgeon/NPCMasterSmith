package main

import (
	"fmt"
	"time"
)

type LLM struct {
	Model    string // Path to the model.bin
	Llamacpp string // Path to the llama.cpp folder
	Ngl      int    // Number of layers to store in VRAM
}

// GetLLMProps reads the properties currently set to the LLM struct.
func (llm *LLM) GetLLMProps() {
	fmt.Println("Model Path: ", llm.Model)
	fmt.Println("Llama.cpp Path: ", llm.Llamacpp)
	fmt.Println("Number of layers to store in VRAM: ", llm.Ngl)
}

func (llm *LLM) mockPromptModel(prompts []string) ([]string, error) {
	jsonResponse := "{\"Name\": \"Sturgeon the destroyer\", \"Summary\": \"A 10 foot tall snake humanoid creature whose sole purpose is to avenge his fallen brethren\",\"Description\": \"A 10 foot tall snake-humanoid creature with black life-less eyes, hands as big as a washing machine lid, a strong back full of small horn-like bones with a long sword.\", \"Motivation\": \"Comming from a long gone species of secretive, high level assasins, Sturgeon's life long quest has become vengeance. He seeks to take revenge on those who orchestraded the slaughter of his brethren, leaving only him to live on with the shame and dishonor of being the last one alive.\"}"
	time.Sleep(2 * time.Second)
	return []string{jsonResponse}, nil
}

func (llm *LLM) mockBufferPromptModel(prompt string, outputChan chan<- string) {
	stringResponse := "This is an alternative character description, its really long on purpose since it is meant to only showcase NPC Master Smiths' capability of interacting with an LLM on runtime. This in turn would prevent the users from being bored while waiting for a full character description to be generated, and instead allowing them to read what is coming in live time."

	// If the string has a special character (non utf-8 or takes more than 1 byte space) the len() function is not suitable since it counts bytes, not characters.
	for _, character := range stringResponse {
		token := fmt.Sprintf("%s", string(character))
		// fmt.Print(token)
		time.Sleep(300 * time.Millisecond)
		outputChan <- token
	}

	// Close the channel to signal end of data transferring
	close(outputChan)
	fmt.Println("\nChannel closed")
}
