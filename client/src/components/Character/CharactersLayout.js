import { useState, useEffect } from 'react';
import { getCharacters } from '../API/API';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'
import CharacterCard from './CharacterCard';

export default CharactersLayout = (props) => {

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

        setFetchedCharacters([...characters]);
        // Let the loading animation run for at least half a second before displaying the characters
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
                fetchedCharacters.concat(props.dummies).map((character) => (
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