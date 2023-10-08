import CharactersPage from "../Character/CharactersPage";
import Box from '@mui/material/Box';
import PromptPage from "../Prompt/PromptPage";

const ContentHolder = () => {
    return (
        <Box sx={{ mb: '12px', mt: '12px', width: '100%', display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <PromptPage></PromptPage>
            <CharactersPage/>
        </Box>
    )
}

export default ContentHolder;