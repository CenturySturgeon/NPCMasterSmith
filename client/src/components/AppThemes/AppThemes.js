import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#19d2a2',
        },
        secondary: {
            main: '#0099f5',
        },
        info: {
            main: '#0288d1',
        },
        background: {
            default: '#282c34',
            paper: '#282c34',
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#19d2a2',
        },
        secondary: {
            main: '#0099f5',
        },
        info: {
            main: '#0288d1',
        },
        background: {
            paper: '#fafafa',
        },
    },
})