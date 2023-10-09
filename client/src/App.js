import { useState, createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from './components/AppThemes/AppThemes'
import CharactersPage from './components/Character/CharactersPage';
import PromptPage from './components/Prompt/PromptPage';
import SingleCharCard from './components/Character/SingleCharCard';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AppPage from './components/AppPage/AppPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppPage/>,
        children: [
            {
                index: true,
                element: <PromptPage />,
            },
            {
                path: "/characters",
                element: <CharactersPage />,
            },
            {
                path: "/newcharacter",
                element: <SingleCharCard />,
            },
        ],
    },

]);

// Create the context for the app
export const AppContext = createContext();

function Application() {

    const [isLightThemed, setIsLightThemed] = useState(false);

    const toggleTheme = () => {
        setIsLightThemed(isLightThemed => !isLightThemed);
    };


    let Theme = isLightThemed ? lightTheme : darkTheme;

    let themeColors = { mode: Theme.palette.mode, primary: Theme.palette.primary.main, secondary: Theme.palette.secondary.main }

    return (
        <ThemeProvider theme={Theme}>
            <AppContext.Provider value={{ themeColors, isLightThemed, toggleTheme }}>
                <RouterProvider router={router} />
            </AppContext.Provider>

        </ThemeProvider>
    )
}

export default Application;