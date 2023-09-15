import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

const theme = createTheme({
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
            paper: '#282c34',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
