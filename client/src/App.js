import SearchAppBar from './components/SearchAppBar/AppBar';
import Box from '@mui/material/Box';
import { darkTheme, lightTheme } from './components/AppThemes/AppThemes'
import ContenHolder from "./components/ContentHolder/ContentHolder";

import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import man_image from '../public/images/profile_man.png'
import woman_image from '../public/images/profile_woman.png'

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
                    padding: '0px',
                    minHeight: '100%'
                }}
            >
                <SearchAppBar isLightThemed={isLightThemed} toggleTheme={toggleTheme}></SearchAppBar>
                <ContenHolder theme={isLightThemed ? lightTheme : darkTheme} dummies={dummies}></ContenHolder>
            </Box>
        </ThemeProvider>
    )
}

export default Application;