import { Paper } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 2

export default function Character() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper elevation={3}>Character</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}