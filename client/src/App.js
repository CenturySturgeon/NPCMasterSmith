import CharactersLayout from "./components/Character/CharactersLayout";
import PromptField from "./components/Prompt/PromptField";
import SearchAppBar from './components/AppBar/AppBar';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import man_image from '../public/images/profile_man.png'
import woman_image from '../public/images/profile_woman.png'
import { darkTheme, lightTheme } from './components/AppThemes/AppThemes'

function Application() {

    const [isLightThemed, setIsLightThemed] = useState(false);

    const toggleTheme = () => {
        setIsLightThemed(isLightThemed => !isLightThemed);
    }

    const dummyM = { image: man_image, name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character" };
    const dummyF = { image: woman_image, name: "Name of Character", quote: "Hereby is thy quote, a brief phrase said by the character" };
    const dummies = [dummyM, dummyF, dummyM, dummyF, dummyF];


    return (
        <ThemeProvider theme={isLightThemed ? lightTheme : darkTheme}>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    padding: '0px'
                }}
            >
                <SearchAppBar toggleTheme={toggleTheme}></SearchAppBar>
                <Box sx={{
                    margin: '7px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <PromptField></PromptField>
                    </div>
                    <br />
                    <CharactersLayout items={dummies}></CharactersLayout>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Application;