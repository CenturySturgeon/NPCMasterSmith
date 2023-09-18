import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

export default function PromptField(props) {
  const [prompt, setPrompt] = useState('');
  const [iconEnabled, setIconEnabled] = useState(false);

  function onPromptInputChange(event) {
    const inputText = event.target.value;
    setPrompt(inputText);
    const wordCount = inputText.trim().split(/\s+/).length;
    setIconEnabled(wordCount > 1);
  }

  function sendPrompt(){
    if (iconEnabled) {
      // Handle sending the prompt to the backend here
      console.log('Prompt sent to the backend');
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
        value={prompt}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon
                style={{cursor: iconEnabled ? 'pointer' : 'default', opacity: iconEnabled ? 1 : 0.5, color: iconEnabled ? props.theme.palette.primary.main : 'inherit'}}
                onClick={sendPrompt}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}