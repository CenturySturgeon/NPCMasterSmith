package utils

import (
	"errors"
	"fmt"
	"strings"
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
