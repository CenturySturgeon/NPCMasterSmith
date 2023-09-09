import './Character.css'
import { Paper, Box, IconButton } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVertIcon

import CharacterText from './CharacterText';

export default function Character(props) {
    return (
        <Grid item xs={3}>
            <Box position="relative">
                <IconButton aria-label="show more" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <MoreVertIcon />
                </IconButton>
                <Paper elevation={3}>
                    <img className="img" src={props.image} alt="Character Image" />
                    <CharacterText name={props.name} quote={props.quote}></CharacterText>
                </Paper>
            </Box>
        </Grid>
    );
}
