import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";


const ContentHolder = () => {
    return (
        <Box sx={{ mb: '12px', mt: '12px', width: '100%', display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Outlet />
        </Box>
    )
}

export default ContentHolder;