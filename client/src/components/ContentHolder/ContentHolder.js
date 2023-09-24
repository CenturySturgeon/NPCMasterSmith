import CharactersPage from "../Character/CharactersPage";
import PromptField from "../Prompt/PromptField";
import Box from '@mui/material/Box';

const ContentHolder = (props) => {
    return (
        <Box
            sx={{ mt: '12px' }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <PromptField theme={props.theme}></PromptField>
            </div>
            <br />
            <CharactersPage theme={props.theme}/>

        </Box>
    )
}

export default ContentHolder;