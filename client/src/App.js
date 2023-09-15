import CharactersLayout from "./components/Character/CharactersLayout";
import PromptField from "./components/Prompt/PromptField";
import Box from '@mui/material/Box';

import man_image from '../public/images/profile_man.png'
import woman_image from '../public/images/profile_woman.png'

function Application() {

    const dummyM = {image: man_image, name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character"};
    const dummyF = {image: woman_image, name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character"};
    const dummies = [dummyM, dummyF, dummyM, dummyF, dummyF];
    

    return (
        <Box sx={{
            margin: '7px'
        }}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%' }}>
                <PromptField></PromptField>
            </div>
            <br/>
            <CharactersLayout items={dummies}></CharactersLayout>
        </Box>
    )
}

export default Application;