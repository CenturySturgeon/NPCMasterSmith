import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Character from './Character';

export default CharacterLayout = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Character></Character>
                <Character></Character>
                <Character></Character>
                <Character></Character>
            </Grid>
        </Container>
    )
}