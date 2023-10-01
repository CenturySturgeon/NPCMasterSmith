
import { useState, useEffect } from 'react';
import { Character, getCharacters } from '../API/API';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'
import CharacterCard from './CharacterCard';

const appearance = "A brief, physical description of the character goes here.";
const roleplayProps = ["My first roleplay property", "My second roleplay property", "My third roleplay property"];
const dummyM = new Character(0, "Dead rising", man_image, false, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);
const dummyF = new Character(0, "Limbo", woman_image, false, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);
const campaignLess = new Character(0, "", woman_image, true, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);
const dummies = [dummyM, dummyF, campaignLess];

export default CharactersLayout = () => {

    const [fetchedCharacters, setFetchedCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

        setFetchedCharacters([...characters].concat(dummies),);
        // run the loading animation for at least half a second before displaying the characters
        setTimeout(function () {
            setIsLoading(false);
        }, 500);
    }

    useEffect(() => {
        getCharacters()
            .then(data => { handleCharacters(data) })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    const charGrid = (
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
    );

    const noChars = (
        <Typography sx={{ textAlign: 'center', fontWeight: '400' }} variant="h1" component="h2">No Characters Available</Typography>
    );

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Container>
            {fetchedCharacters.length > 0 ? charGrid : noChars}
        </Container>
    )
}