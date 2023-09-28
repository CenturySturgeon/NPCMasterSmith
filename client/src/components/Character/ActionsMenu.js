import { deleteCharacter } from '../API/API';
import Menu from '@mui/material/Menu';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActionsMenu(props) {

  function setCardStatusToEdit() {
    props.closeVertIconMenu();
    props.setEditingCard(true);
  }

  function handleDeleteResponse(responseStatus) {
    props.closeVertIconMenu();
    console.log("successfully deleted the character: ", responseStatus);
  }

  function handleDeleteCharClick() {
    deleteCharacter({ Id: props.id })
      // Handle the response if the request succeeds
      .then(responseStatus => { handleDeleteResponse(responseStatus) })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors if the request fails
      });
  }

  return (
    <Menu
      disableScrollLock={true}
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.closeVertIconMenu}
    >
      <MenuItem onClick={setCardStatusToEdit}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Edit</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleDeleteCharClick}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>

    </Menu>
  );
}
