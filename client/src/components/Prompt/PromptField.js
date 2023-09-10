import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
      />
    </Box>
  );
}
