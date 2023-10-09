import { useContext } from 'react';
import { AppContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import { Prompt, postCharacterPrompt } from '../API/API';
import { Box, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import PromptField from "./PromptField";

const PromptPage = () => {
    const navigate = useNavigate();

    // Handles the LLM response
    function handlePostResponse(data) {
        console.log(data.character)
        navigate('/newcharacter', { state: data.character });
    }

    const handlePromptExampleClick = (event) => {
        prompt = new Prompt(event.target.textContent);

        postCharacterPrompt(prompt)
            // Handle the response if the request succeeds
            .then(data => { handlePostResponse(data) })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors if the request fails
            });
    }

    // Extract the theme colors object from the app's context
    const { themeColors } = useContext(AppContext);

    const buttonColor = themeColors.mode === 'dark' ? 'primary' : 'inherit';
    const buttonStyles = { width: '100%', justifyContent: 'space-between', paddingTop: '12px', paddingBottom: '12px', marginBottom: '6px', textTransform: 'none' };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box>
                <Typography fontWeight={400} variant="h1" component="h1">All Your NPCs In One Place</Typography>
            </Box>
            <Box width={'60%'} >
                <Button color={buttonColor} sx={buttonStyles} variant="outlined" endIcon={<SendIcon />} onClick={handlePromptExampleClick}>
                    A small, goblin-like hunchback creature who hides his dark intentions behind his charm.
                </Button>
                <Button color={buttonColor} sx={buttonStyles} variant="outlined" endIcon={<SendIcon />} onClick={handlePromptExampleClick}>
                    A seasoned bartender who knows and talks more than he probably should...
                </Button>
                <Button color={buttonColor} sx={buttonStyles} variant="outlined" endIcon={<SendIcon />} onClick={handlePromptExampleClick}>
                    A shipyard store owner with a thick pirate accent, a rude demeanor, and a wooden leg.
                </Button>
            </Box>
            <PromptField></PromptField>
        </Box>
    )
}

export default PromptPage;