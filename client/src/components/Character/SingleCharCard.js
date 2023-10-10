import { Box, Typography, Button } from "@mui/material";
import CharacterCard from "./CharacterCard"
import man_image from '../../../public/images/profile_man.png'
import { useLocation } from 'react-router-dom';

const SingleCharCard = () => {
    // If you don't remeber what this does, check out https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
    const { state: character } = useLocation();

    if (character === null) {
        return (
            <Typography fontWeight={400} variant="h1" component="h1">No Character Data Found</Typography>
        )
    } else {
        return (
            <>

                <Typography fontWeight={400} variant="h1" component="h1">Customize Character</Typography>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <CharacterCard
                        isOnlyCard={true}
                        id={character.Id}
                        campaign={character.Campaign}
                        image={man_image}
                        favorite={false}
                        name={character.Name}
                        quote={character.Quote}
                        appearance={character.Appearance}
                        roleplayProps={[character.Roleplay[0], character.Roleplay[1], character.Roleplay[2]]} />
                </Box>
            </>
        )
    }

}

export default SingleCharCard;