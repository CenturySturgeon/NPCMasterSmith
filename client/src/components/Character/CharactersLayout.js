
import { useState, useEffect } from 'react';
import { Character, getCharacters } from '../API/API';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'
import CharacterCard from './CharacterCard';

const appearance = "A brief, physical description of the character goes here";
const roleplayProps = ["My first roleplay property", "My second roleplay property", "My third roleplay property"];
const dummyM = new Character(666, "Dead rising", man_image, false, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);
const dummyF = new Character(667, "Limbo", woman_image, false, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);
const campaignLess = new Character(670, "", woman_image, true, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);
const dummies = [dummyM, dummyF, campaignLess];

export default CharactersLayout = () => {

    const [fetchedCharacters, setFetchedCharacters] = useState([]);

    function handleCharacters(data) {
        // Access the "characters" array
        const characters = data.characters;

        // Loop through the characters array and set the images depending on the id
        for (const character of characters) {
            if (character.Id % 2 === 0) {
                character.Image = woman_image
            } else {
                character.Image = man_image
            }
        }

        setFetchedCharacters(dummies.concat(...characters));
    }

    useEffect(() => {
        getCharacters()
            .then(data => { handleCharacters(data) })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [])

    return (
        <Container>
            <Grid sx={{ margin: 0 }} container spacing={3}>
                {
                    fetchedCharacters.map((character) => (
                        <CharacterCard
                            id={character.Id}
                            campaign={character.Campaign}
                            image={character.Image}
                            favorite={character.Favorite}
                            name={character.Name}
                            quote={character.Quote}
                            appearance={character.Appearance}
                            roleplayProps={character.Roleplay}
                        />
                    ))
                }
            </Grid>
        </Container>
    )
}