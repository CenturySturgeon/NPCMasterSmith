import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ActionsMenu(props) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={props.handleClose}>Edit</MenuItem>
        <MenuItem onClick={props.handleClose}>Delete</MenuItem>
        <MenuItem onClick={props.handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
