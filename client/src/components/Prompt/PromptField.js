import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

export default function PromptField() {

  const [canSendPrompt, setCanSendPrompt] = useState(false);
  const [prompt, setPrompt] = useState('');

  function onPropmtInputChange(event){
    setPrompt(event.target.value);
    // Count the number of words in the prompt field
    if (event.target.value.trim().split(/\s+/).length > 1){
      setCanSendPrompt(true);
      console.log('Prompt can be sent to the backend')
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
        onChange={onPropmtInputChange}
        defaultValue={prompt}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
