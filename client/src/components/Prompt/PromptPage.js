import { useContext } from 'react';
import { AppContext } from '../../App';
import PromptField from "./PromptField";
import { Box, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const PromptPage = () => {
    // Extract the theme colors object from the app's context
    const { themeColors } = useContext(AppContext);
    
    const buttonColor = themeColors.mode === 'dark' ? 'primary' : 'inherit';
    const buttonStyles = { width: '100%', justifyContent: 'space-between', paddingTop: '12px', paddingBottom: '12px', marginBottom: '6px' };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box>
                <Typography fontWeight={400} variant="h1" component="h1">All Your NPCs In One Place</Typography>
            </Box>
            <Box width={'60%'} >
                <Button color={buttonColor}  sx={buttonStyles} variant="outlined" endIcon={<SendIcon />}>
                    A small, goblin-like hunchback creature who hides his dark intentions behind his charm
                </Button>
                <Button color={buttonColor} sx={buttonStyles} variant="outlined" endIcon={<SendIcon />}>
                    A seasoned bartender who knows and talks more than he probably should
                </Button>
                <Button color={buttonColor} sx={buttonStyles} variant="outlined" endIcon={<SendIcon />}>
                    A shipyard store owner with a thick pirate accent, a rude demeanor, and a wooden leg
                </Button>
            </Box>
            <PromptField></PromptField>
        </Box>
    )
}

export default PromptPage;