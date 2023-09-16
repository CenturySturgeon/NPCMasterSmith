import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
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

const lightTheme = createTheme({
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

export default function AppTheme(props) {
    return(
        <ThemeProvider theme={darkTheme}>
            {props.children}
        </ThemeProvider>
    )
}