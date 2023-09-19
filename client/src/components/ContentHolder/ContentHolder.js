import CharactersLayout from "../Character/CharactersLayout";
import PromptField from "../Prompt/PromptField";
import Box from '@mui/material/Box';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

const ContentHolder = (props) => {
    return (
        <Box
            sx={{ mt: '12px'}}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <PromptField theme={props.theme}></PromptField>
            </div>
            <br />
            <CharactersLayout items={props.dummies}></CharactersLayout>
            <Box sx={{position: 'fixed', bottom: '16px', right: '24px'}}>
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
            
        </Box>
    )
}

export default ContentHolder;