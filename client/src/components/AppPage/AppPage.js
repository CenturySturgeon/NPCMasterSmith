import Box from '@mui/material/Box';
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import ContentHolder from "../ContentHolder/ContentHolder";

const AppPage = () => {
    return (
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
            <ContentHolder />
        </Box>
    )
}

export default AppPage;