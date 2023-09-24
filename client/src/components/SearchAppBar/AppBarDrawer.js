import { Drawer, List, ListItem, ListItemText } from '@mui/material';

export default function AppBarDrawer(props){
    return (
        <Drawer anchor="left" open={props.isDrawerOpen} onClose={props.toggleDrawer}>
          <List>
            <ListItem>
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Item 2" />
            </ListItem>
            {/* Add more menu items as needed */}
          </List>
        </Drawer>
    )
}