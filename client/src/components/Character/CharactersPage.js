import CharactersLayout from "./CharactersLayout";
import ActionsSpeedDial from "../ActionsSpeedDial/ActionsSpeedDial";

const CharactersPage = (props) => {
    return(
        <>
            <CharactersLayout theme={props.theme}/>
            <ActionsSpeedDial/>
        </>
    )
}

export default CharactersPage;