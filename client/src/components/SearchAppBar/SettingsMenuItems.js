import Menu from '@mui/material/Menu';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function SettingsMenuItems(props) {

    let themeIcon;
    if (props.isLightThemed) {
        themeIcon = (
            <MenuItem onClick={props.toggleTheme}>
                <ListItemIcon>
                    <Brightness7Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Dark Mode</ListItemText>
            </MenuItem>
        );
    } else {
        themeIcon = (
            <MenuItem onClick={props.toggleTheme}>
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
