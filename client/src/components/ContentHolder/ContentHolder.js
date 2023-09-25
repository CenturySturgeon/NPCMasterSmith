import CharactersPage from "../Character/CharactersPage";
import Box from '@mui/material/Box';
import PromptPage from "../Prompt/PromptPage";

const ContentHolder = () => {
    return (
        <Box sx={{ mt: '12px' , width: '100%', display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
            <PromptPage></PromptPage>
            <CharactersPage/>
        </Box>
    )
}

export default ContentHolder;