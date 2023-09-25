import { useState, createContext } from 'react';
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

    let themeColors = {primary: Theme.palette.primary.main, secondary: Theme.palette.secondary.main}

    return (
        <ThemeProvider theme={Theme}>
            <AppContext.Provider value={{ themeColors, isLightThemed, toggleTheme }}>
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
                    <SearchAppBar />
                    <ContenHolder />
                </Box>
            </AppContext.Provider>

        </ThemeProvider>
    )
}

export default Application;