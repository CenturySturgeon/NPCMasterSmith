import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

export default function PromptField() {
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
