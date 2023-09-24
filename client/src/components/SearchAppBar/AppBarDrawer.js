import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ClassIcon from '@mui/icons-material/Class';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function AppBarDrawer(props) {
    return (
        <Drawer
            disableScrollLock={ true } 
            anchor="left"
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

            <List> {
                [
                    {
                        text: "Manage Campaigns",
                        icon: <ClassIcon/>}, {
                        text: "Create Character",
                        icon: <PersonAddIcon/>}, {
                        text: "Manage Characters",
                        icon: <GroupsIcon/>}
                ].map((item) => (
                    <ListItem key={
                            item.text
                        }
                        disablePadding>
                        <ListItemButton>
                            <ListItemIcon> {
                                item.icon
                            } </ListItemIcon>
                            <ListItemText primary={
                                item.text
                            }/>
                        </ListItemButton>
                    </ListItem>
                ))
            } </List>
        </Drawer>
    )
}
