import Menu from '@mui/material/Menu';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SettingsMenuItems(props) {
  return (
      <Menu
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.handleClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>

        <MenuItem onClick={props.handleClose}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>

      </Menu>
  );
}
