import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Character from './Character';

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'

const dummyM = { image: man_image, name: "Name of Character", campaign:'Dead Rising', quote: "Hereby is thy quote, a brief phrase said by the character" };
const dummyF = { image: woman_image, name: "Name of Character", campaign:'Limbo', quote: "Hereby is thy quote, a brief phrase said by the character" };
const dummies = [dummyM, dummyF, dummyM, dummyF, dummyF];

export default CharactersLayout = (props) => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    dummies.map((character) => (
                        <Character
                            theme={props.theme}
                            setBodyPadComp={props.setBodyPadComp}
                            campaign={character.campaign}
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