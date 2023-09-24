import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';

import { darkTheme, lightTheme } from './components/AppThemes/AppThemes'
import ContenHolder from "./components/ContentHolder/ContentHolder";
import SearchAppBar from './components/SearchAppBar/SearchAppBar';

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

function Application() {

    const [isLightThemed, setIsLightThemed] = useState(false);

    const toggleTheme = () => {
        setIsLightThemed(isLightThemed => !isLightThemed);
    };


    let Theme = isLightThemed ? lightTheme : darkTheme;

    const [isBodyPaddingActive, setIsBodyPaddingActive] = useState(false);

    // TLDR: Margins that compensate mui's padding change on the body when an appbar menu pops up (desktop only).
    // If the menu pops up, and if the desktop scrollbar is present, MUI adds a padding to the right of the body to compensate for the dissapearance of the scrollbar.
    // MUI's compensation messes up components that are fixed (like the speed dial actions button) by moving them out of place.
    // This state compensates for that padding change by using a margin, effectively making the components with that style to ignore the body's padding.
    if (!isBodyPaddingActive){
        boddyPaddingCompensation = { marginRight: '0px' };
    } else {
        // Check if the scrollbar is present
        if (document.body.scrollHeight > document.body.clientHeight && !isMobileDevice()) {
            boddyPaddingCompensation = { marginRight: '17px' };
          } else { 
            boddyPaddingCompensation = { marginRight: '0px' };
          }
    }

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
                <ContenHolder fixedItemMargin={boddyPaddingCompensation} theme={Theme}></ContenHolder>
            </Box>
        </ThemeProvider>
    )
}

export default Application;