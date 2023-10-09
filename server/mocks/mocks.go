package mocks

import (
	"fmt"
	"time"
)

type LLM struct {
	Model            string // Path to the model.bin
	Llamacpp         string // Path to the llama.cpp folder
	Ngl              int    // Number of layers to store in VRAM
	InstructionBlock string // Sets the format for the LLM respones
}

// GetLLMProps reads the properties currently set to the LLM struct.
func (llm *LLM) GetLLMProps() {
	fmt.Println("Model Path: ", llm.Model)
	fmt.Println("Llama.cpp Path: ", llm.Llamacpp)
	fmt.Println("Number of layers to store in VRAM: ", llm.Ngl)
}

func (llm *LLM) PromptModel(prompts []string) ([]string, error) {
	jsonResponse := "{\"Name\": \"Gargauth (Once-treasurer of hell, the Tenth Lord of the nine, Lost lord of the pit)\", \"Appearance\": \"A shield of silvered, vanadium steel, embelished with bronze decorations suggesting the horns, eyes and fangs of a pit fiend.\", \"Quote\": \"You have no idea of the secrets which I could share with you! If you would only serve me!\", \"Roleplay\": [\"Wants nothing more than to be released from his prision.\", \"Craves power, with little care for what it takes.\", \"Speaks in either a siblant, seductive whisper or a baritone roar.\"]}"

	return []string{jsonResponse}, nil
}

func (llm *LLM) BufferPromptModel(prompt string, outputChan chan<- string) {
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

// Mock prompts the model and returns a dummy character
func MockPromptModel() (string, error) {
	jsonResponse := "{\"Name\": \"Gargauth (Once-treasurer of hell, the Tenth Lord of the nine, Lost lord of the pit)\", \"Appearance\": \"A shield of silvered, vanadium steel, embelished with bronze decorations suggesting the horns, eyes and fangs of a pit fiend.\", \"Quote\": \"You have no idea of the secrets which I could share with you! If you would only serve me!\", \"Roleplay\": [\"Wants nothing more than to be released from his prision.\", \"Craves power, with little care for what it takes.\", \"Speaks in either a siblant, seductive whisper or a baritone roar.\"]}"

	return jsonResponse, nil
}
