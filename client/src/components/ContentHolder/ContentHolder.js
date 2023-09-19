import CharactersLayout from "../Character/CharactersLayout";
import PromptField from "../Prompt/PromptField";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const ContentHolder = (props) => {
    return (
        <Box
            sx={{ mt: '12px' }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <PromptField theme={props.theme}></PromptField>
            </div>
            <br />
            <CharactersLayout items={props.dummies}></CharactersLayout>
            <Box sx={{position:'fixed', right:'16px', bottom:'12px'}}>
                <Fab color="primary">
                    <AddIcon></AddIcon>
                </Fab>
            </Box>
        </Box>
    )
}

export default ContentHolder;