import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Character from './Character';

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'

export default CharactersLayout = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Character image={man_image}></Character>
                <Character image={woman_image}></Character>
                <Character image={man_image}></Character>
                <Character image={woman_image}></Character>
            </Grid>
        </Container>
    )
}