import CharactersPage from "../Character/CharactersPage";
import Box from '@mui/material/Box';
import PromptPage from "../Prompt/PromptPage";

const ContentHolder = (props) => {
    return (
        <Box sx={{ mt: '12px' , width: '100%', display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
            <PromptPage></PromptPage>
            <CharactersPage theme={props.theme}/>
        </Box>
    )
}

export default ContentHolder;