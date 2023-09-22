import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Character from './Character';

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'

const appearance = "A brief, physical description of the character goes here";
const roleplayProps = ["My first roleplay property", "My second roleplay property", "My third roleplay property"];
const dummyM = { image: man_image, id: 0, campaign: 'Dead Rising', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const dummyF = { image: woman_image, id: 0, campaign: 'Limbo', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const campaignLess = { image: woman_image, id: 4, campaign: '', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const dummies = [{ ...dummyM, ["id"]: 0 }, { ...dummyF, ["id"]: 1 }, { ...dummyM, ["id"]: 2 }, { ...dummyF, ["id"]: 3 }, campaignLess];

export default CharactersLayout = (props) => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    dummies.map((character) => (
                        <Character
                            theme={props.theme}
                            setBodyPadComp={props.setBodyPadComp}
                            image={character.image}
                            id={character.id}
                            campaign={character.campaign}
                            name={character.name}
                            quote={character.quote}
                            appearance={character.appearance}
                            roleplayProps={character.roleplayProps}
                        />
                    ))
                }
            </Grid>
        </Container>
    )
}