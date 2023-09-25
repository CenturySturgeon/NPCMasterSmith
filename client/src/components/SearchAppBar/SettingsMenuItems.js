import { useContext } from 'react';
import Menu from '@mui/material/Menu';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppContext } from '../../App';

export default function SettingsMenuItems(props) {

    // Extract the theme state variable and function from the app's context
    const { isLightThemed, toggleTheme } = useContext(AppContext);

    let themeIcon;
    if (isLightThemed) {
        themeIcon = (
            <MenuItem onClick={toggleTheme}>
                <ListItemIcon>
                    <Brightness7Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Dark Mode</ListItemText>
            </MenuItem>
        );
    } else {
        themeIcon = (
            <MenuItem onClick={toggleTheme}>
                <ListItemIcon>
                    <Brightness4Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Light Mode</ListItemText>
            </MenuItem>
        );
    }

    return (
        <Menu
            disableScrollLock={ true }
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
        >
            {themeIcon}
        </Menu>
    );
}
