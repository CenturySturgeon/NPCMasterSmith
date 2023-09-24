import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';

import { darkTheme, lightTheme } from './components/AppThemes/AppThemes'
import ContenHolder from "./components/ContentHolder/ContentHolder";
import SearchAppBar from './components/SearchAppBar/SearchAppBar';

function Application() {

    const [isLightThemed, setIsLightThemed] = useState(false);

    const toggleTheme = () => {
        setIsLightThemed(isLightThemed => !isLightThemed);
    };


    let Theme = isLightThemed ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={Theme}>
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
                <ContenHolder theme={Theme}></ContenHolder>
            </Box>
        </ThemeProvider>
    )
}

export default Application;