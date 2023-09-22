import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Character from './Character';

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'

const appearance = "A brief, physical description of the character goes here";
const roleplayProps = ["My first roleplay property","My second roleplay property", "My third roleplay property"];
const dummyM = { image: man_image, campaign:'Dead Rising', name: "Name of Character",  quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const dummyF = { image: woman_image, campaign:'Limbo', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const campaignLess = { image: woman_image, campaign:'', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const dummies = [dummyM, dummyF, dummyM, dummyF, campaignLess];

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