import { Box } from "@mui/material";
import CharactersLayout from "./CharactersLayout";
import ActionsSpeedDial from "../ActionsSpeedDial/ActionsSpeedDial";

const CharactersPage = (props) => {
    return(
        <Box>
            <CharactersLayout theme={props.theme}/>
            <ActionsSpeedDial/>
        </Box>
    )
}

export default CharactersPage;