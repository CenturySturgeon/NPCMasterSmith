import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import ReactDOM from 'react-dom/client';
import Box from '@mui/material/Box';
import App from './App';
import SearchAppBar from './components/AppBar/AppBar';
import AppTheme from './components/AppTheme/AppTheme';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <AppTheme>
        <Box
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                padding: '0px'
            }}
        >
            <SearchAppBar></SearchAppBar>
            <App></App>
        </Box>
    </AppTheme>
);
