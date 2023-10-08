import { Box, Typography, Button } from "@mui/material";
import CharacterCard from "./CharacterCard"
import man_image from '../../../public/images/profile_man.png'

const SingleCharCard = () => {
    return (
        <>

            <Typography fontWeight={400} variant="h1" component="h1">Customize Character</Typography>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <CharacterCard
                    isOnlyCard={true}
                    id={0}
                    campaign={""}
                    image={man_image}
                    favorite={false}
                    name={"AI Created Character"}
                    quote={"Hello There"}
                    appearance={"My appearance"}
                    roleplayProps={["Prop1", "Prop2", "Prop3"]} />
            </Box>
        </>
    )
}

export default SingleCharCard;