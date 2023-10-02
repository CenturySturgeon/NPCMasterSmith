import PromptField from "./PromptField";
import { Box, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const PromptPage = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box>
                <Typography fontWeight={400} variant="h1" component="h1">All Your NPCs In One Place</Typography>
            </Box>
            <Box width={'60%'} >
                <Button color="secondary" sx={{ width: '100%', justifyContent: 'space-between' }} variant="outlined" endIcon={<SendIcon />}>
                    A dragonslayer looking to avenge his dead family
                </Button>
                <Button color="secondary" sx={{ width: '100%', justifyContent: 'space-between' }} variant="outlined" endIcon={<SendIcon />}>
                    A shipyard store owner with a thick pirate accent, a rude demeanor, and a wooden leg
                </Button>
                <Button color="secondary" sx={{ width: '100%', justifyContent: 'space-between' }} variant="outlined" endIcon={<SendIcon />}>
                    A bartender, who knows and talks more than he probably should
                </Button>
            </Box>
            <PromptField theme={props.theme}></PromptField>
        </Box>
    )
}

export default PromptPage;