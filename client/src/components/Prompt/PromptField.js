import { useState, useContext } from 'react';
import { AppContext } from '../../App';
import { Prompt, postCharacterPrompt } from '../API/API';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

export default function PromptField() {
  const navigate = useNavigate();
  
  // Extract the theme colors object from the app's context
  const { themeColors } = useContext(AppContext);

  const [prompt, setPrompt] = useState('');
  const [iconEnabled, setIconEnabled] = useState(false);

  function onPromptInputChange(event) {
    const inputText = event.target.value;
    setPrompt(inputText);
    const wordCount = inputText.trim().split(/\s+/).length;
    setIconEnabled(wordCount > 1);
  }

  // Handles the LLM response
  function handlePostResponse(data) {
    console.log(data.character);
    navigate('/newcharacter', { state: data.character });
  }

  function sendPrompt() {
    if (iconEnabled) {
      charPrompt = new Prompt(prompt);
      postCharacterPrompt(charPrompt)
        .then(data => { handlePostResponse(data) })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors if the request fails
        });

      setPrompt('');
      setIconEnabled(false);
    }
  }

  return (
    <Box
      sx={{
        width: '75%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField
        fullWidth
        label="Create a character"
        id="fullWidth"
        helperText="A simple description of your character"
        onChange={onPromptInputChange}
        onKeyUp={(event) => { if (event.key === 'Enter') { sendPrompt() } }}
        value={prompt}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon
                style={{
                  cursor: iconEnabled ? 'pointer' : 'default', opacity: iconEnabled ? 1 : 0.5,
                  color: iconEnabled ? themeColors.primary : 'inherit'
                }}
                onClick={sendPrompt}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}