import CharactersLayout from "../Character/CharactersLayout";
import PromptField from "../Prompt/PromptField";
import Box from '@mui/material/Box';

const ContenHolder = (props) => {
    return (
        <Box
            sx={{ mt: '12px' }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <PromptField theme={props.theme}></PromptField>
            </div>
            <br />
            <CharactersLayout items={props.dummies}></CharactersLayout>
        </Box>
    )
}

export default ContenHolder;