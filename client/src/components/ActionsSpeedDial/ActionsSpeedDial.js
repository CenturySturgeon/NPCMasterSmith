import Box from '@mui/material/Box';
// Icons
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';

const actions = [
    { icon: <AddCardIcon />, name: 'Add Empty Card' },
    { icon: <PersonAddIcon />, name: 'Create Character' }
];

const ActionsSpeedDial = (props) => {
    return (
        <Box sx={{ position: 'fixed', bottom: '16px', right: '24px' }}>
            <SpeedDial
                ariaLabel="Characters action speed dial"
                icon={<SpeedDialIcon />}
                sx={props.fixedItemMargin}

            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}
export default ActionsSpeedDial