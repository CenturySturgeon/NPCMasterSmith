import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import SettingsMenuItems from './SettingsMenuItems';

const SettingsMenu = (props) => {

    // Set a state for the anchor element of the menu
    const [anchorEl, setAnchorEl] = useState(null);
    // Set a variable to indicate wether the menu is open or not 
    const open = Boolean(anchorEl);

    // Menu event handlers
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 2 }}
                onClick={handleClick}
            >
                <SettingsIcon />
            </IconButton>
            <SettingsMenuItems isLightThemed={isLightThemed} toggleTheme={props.toggleTheme} anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} open={open}></SettingsMenuItems>
        </div>
    )
}

export default SettingsMenu;