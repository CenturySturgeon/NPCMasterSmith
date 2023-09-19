import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Character from './Character';

export default CharactersLayout = (props) => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    props.items.map((character) => (
                        <Character
                            setBodyPadComp={props.setBodyPadComp}
                            image={character.image}
                            name={character.name}
                            quote={character.quote}
                        />
                    ))
                }
            </Grid>
        </Container>
    )
}