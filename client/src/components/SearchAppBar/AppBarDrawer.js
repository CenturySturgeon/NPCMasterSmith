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

import { useNavigate } from "react-router-dom";

export default function AppBarDrawer(props) {
    const navigate = useNavigate();

    return (
        <Drawer
            disableScrollLock={true}
            anchor="left"
            open={props.isDrawerOpen}
            onClose={props.toggleDrawer}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <IconButton onClick={props.toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />

            <List> {
                [
                    { text: "Create Character", icon: <PersonAddIcon />, route: "/" },
                    { text: "Manage Characters", icon: <GroupsIcon />, route: "/characters" },
                    { text: "Manage Campaigns", icon: <ClassIcon />, route: "/" }
                ].map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton onClick={() => navigate(item.route)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                            />
                        </ListItemButton>
                    </ListItem>
                ))
            } </List>
        </Drawer>
    )
}
