import { Box, TextField, Button } from "@mui/material";
import './Character.css'

export default function CharacterForm(props) {

    function setCharacterName(event) {
        props.setCharName(event.target.value);
    }

    function setCharacterCampaign(event) {
        props.setCharCampaign(event.target.value);
    }

    function setCharacterQuote(event) {
        props.setCharQuote(event.target.value);
    }

    const textFieldStyles = { marginBottom: '12px' };
    return (
        <form>
            <img className="img" src={props.image} alt="Character Image" />
            <Box padding={1}>
                <div className="form-inputsHolder">
                    <TextField sx={textFieldStyles} onChange={(event) => { setCharacterCampaign(event) }} label="Campaign" value={props.campaign} variant="outlined" />
                    <TextField sx={textFieldStyles} onChange={(event) => { setCharacterName(event) }} label="Name" value={props.name} variant="outlined" />
                    <TextField sx={textFieldStyles} onChange={(event) => { setCharacterQuote(event) }} label="Quote" value={props.quote} variant="outlined" />
                </div>
                <div className="form-buttonHolder">
                    <Button type='submit' variant="contained">Save</Button>
                    <Button onClick={() => { props.setEditingCard(false) }} variant="contained">Cancel</Button>
                </div>
            </Box>
        </form>
    )
}