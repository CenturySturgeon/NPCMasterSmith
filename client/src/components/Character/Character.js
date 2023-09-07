import { Paper } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import './Character.css'
import image from '../../../public/images/profile_man.png'

export default function Character() {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img className="img" src={image}></img>
            </Paper>
        </Grid>
    );
}