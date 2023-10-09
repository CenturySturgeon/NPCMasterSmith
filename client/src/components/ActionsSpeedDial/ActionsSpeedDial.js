import { useNavigate } from 'react-router-dom';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';

// Icons
import { SpeedDialIcon } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';

const ActionsSpeedDial = (props) => {
    const navigate = useNavigate();

    const actions = [
        { icon: <AddCardIcon sx={{ transform: 'scaleX(-1)' }} onClick={props.addDummy} />, name: 'New Character Card' },
        { icon: <PersonAddIcon onClick={() => { navigate('/') }} />, name: 'Create Character' }
    ];
    return (
        <Box sx={{ position: 'fixed', bottom: '16px', right: '24px' }}>
            <SpeedDial
                ariaLabel="Characters action speed dial"
                icon={<SpeedDialIcon />}
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