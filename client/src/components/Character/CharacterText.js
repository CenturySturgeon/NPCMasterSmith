import { Typography, Box } from "@mui/material";
import CollapsableSection from "./CollapsableSection";
import './CharacterCard.css'

const CharacterText = (props) => {
    return (
        <Box className='top-bottom-holder' justifyContent={'space-between'} paddingX={1}>
            <Box className='top-bottom-inner' >
                <Typography variant="h6" component="h2">
                    {props.name}
                </Typography>
                <Typography sx={{ fontStyle: 'italic' }} variant="subtitle1">
                    "{props.quote}"
                </Typography>
            </Box>
            <CollapsableSection toggleIsFavorite={props.toggleIsFavorite} isFavorite={props.isFavorite} appearance={props.appearance} roleplayProps={props.roleplayProps}></CollapsableSection>
        </Box>
    );
}

export default CharacterText;