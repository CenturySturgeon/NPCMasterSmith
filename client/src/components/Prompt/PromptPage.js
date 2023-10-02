import PromptField from "./PromptField";
import { Box, Typography } from "@mui/material";

const PromptPage = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box>
                <Typography fontWeight={400} variant="h1" component="h1">All Your NPCs In One Place</Typography>
            </Box>
            <Box>
                <Typography>A dragonslayer looking to avenge his dead family</Typography>
                <Typography>A shipyard store owner with a thick pirate accent, a rude demeanor, and a wooden leg</Typography>
                <Typography>A bartender, who knows and talks more than he probably should</Typography>
            </Box>
            <PromptField theme={props.theme}></PromptField>
        </Box>
    )
}

export default PromptPage;