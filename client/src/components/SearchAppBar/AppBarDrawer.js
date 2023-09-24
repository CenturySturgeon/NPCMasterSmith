import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function AppBarDrawer(props) {
    return (
        <Drawer anchor="left"
            open={
                props.isDrawerOpen
            }
            onClose={
                props.toggleDrawer
        }>
            <div style={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }
            }>
                <IconButton onClick={
                    props.toggleDrawer
                }>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>

            <Divider/>

            <List>
                <ListItem>
                    <ListItemIcon>
                        <PersonAddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Create Character"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GroupsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="View Characters"/>
                </ListItem>
            </List>
        </Drawer>
    )
}
