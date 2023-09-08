import { Typography, Box } from "@mui/material";
import CollapsableSection from "./CollapsableSection";

const CharacterText = () => {
    return (
        <Box paddingX={1}>
            <Typography variant="h6" component="h2">
                Name of Character
            </Typography>
            <Typography variant="subtitle1">
                "Hereby is thy quote, a brief phrase said by the character"
            </Typography>
            <CollapsableSection></CollapsableSection>
        </Box>
    );
}

export default CharacterText;