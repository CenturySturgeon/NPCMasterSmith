import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import App from './App';
import SearchAppBar from './components/AppBar/AppBar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

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

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <ThemeProvider theme={darkTheme}>
        <Box
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                padding: '0px'
            }}
        s>
            <SearchAppBar></SearchAppBar>
            <App></App>
        </Box>
    </ThemeProvider>
);
