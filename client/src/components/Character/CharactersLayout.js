import { getCharacters } from '../API/API';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'
import CharacterCard from './CharacterCard';

const appearance = "A brief, physical description of the character goes here";
const roleplayProps = ["My first roleplay property", "My second roleplay property", "My third roleplay property"];
const dummyM = { image: man_image, id: 0, campaign: 'Dead Rising', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const dummyF = { image: woman_image, id: 0, campaign: 'Limbo', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const campaignLess = { image: woman_image, id: 4, campaign: '', name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character", appearance: appearance, roleplayProps: roleplayProps };
const dummies = [{ ...dummyM, ["id"]: 0 }, { ...dummyF, ["id"]: 1 }, { ...dummyM, ["id"]: 2 }, { ...dummyF, ["id"]: 3 }, campaignLess];

export default CharactersLayout = (props) => {
    getCharacters()
        .then(data => {
            // Access the "characters" array
            const characters = data.characters;

            // Loop through the characters array
            for (const character of characters) {
                console.log(character);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    return (
        <Container>
            <Grid sx={{ margin: 0 }} container spacing={3}>
                {
                    dummies.map((character) => (
                        <CharacterCard
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