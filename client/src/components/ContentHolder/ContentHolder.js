import CharactersLayout from "../Character/CharactersLayout";
import PromptField from "../Prompt/PromptField";
import Box from '@mui/material/Box';

const ContenHolder = (props) => {
    return (
        <Box
            sx={{ margin: '7px' }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <PromptField></PromptField>
            </div>
            <br />
            <CharactersLayout items={props.dummies}></CharactersLayout>
        </Box>
    )
}

export default ContenHolder;