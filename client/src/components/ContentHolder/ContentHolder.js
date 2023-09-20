import ActionsSpeedDial from "../ActionsSpeedDial/ActionsSpeedDial";
import CharactersLayout from "../Character/CharactersLayout";
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
            <CharactersLayout theme={props.theme} setBodyPadComp={props.setBodyPadComp}></CharactersLayout>
            <ActionsSpeedDial fixedItemMargin={props.fixedItemMargin}></ActionsSpeedDial>

        </Box>
    )
}

export default ContentHolder;