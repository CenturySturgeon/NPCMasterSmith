import { Typography, Box } from "@mui/material";
import CollapsableSection from "./CollapsableSection";

const CharacterText = (props) => {
    return (
        <Box paddingX={1}>
            <Typography variant="h6" component="h2">
                {props.name}
            </Typography>
            <Typography sx={{fontStyle: 'italic'}} variant="subtitle1">
                "{props.quote}"
            </Typography>
            <CollapsableSection appearance={props.appearance}></CollapsableSection>
        </Box>
    );
}

export default CharacterText;