import { Paper } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function Character() {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>Character</Paper>
        </Grid>
    );
}