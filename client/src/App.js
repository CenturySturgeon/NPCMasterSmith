import { useState,createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { darkTheme, lightTheme } from './components/AppThemes/AppThemes'
import ContenHolder from "./components/ContentHolder/ContentHolder";
import SearchAppBar from './components/SearchAppBar/SearchAppBar';

// Create the context for the app
export const AppContext = createContext();

function Application() {

    const [isLightThemed, setIsLightThemed] = useState(false);

    const toggleTheme = () => {
        setIsLightThemed(isLightThemed => !isLightThemed);
    };


    let Theme = isLightThemed ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={Theme}>
            <AppContext.Provider value={{ Theme, isLightThemed, toggleTheme }}>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    padding: '0px',
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <SearchAppBar isLightThemed={isLightThemed} toggleTheme={toggleTheme}></SearchAppBar>
                <ContenHolder theme={Theme}></ContenHolder>
            </Box>
            </AppContext.Provider>
            
        </ThemeProvider>
    )
}

export default Application;