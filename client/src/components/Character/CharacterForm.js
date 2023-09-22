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
                    <TextField sx={textFieldStyles} variant="outlined" label="Campaign" onChange={(event) => { setCharacterCampaign(event) }} value={props.campaign} />
                    <TextField sx={textFieldStyles} variant="outlined" label="Name" onChange={(event) => { setCharacterName(event) }} value={props.name} />
                    <TextField sx={textFieldStyles} variant="outlined" label="Quote" onChange={(event) => { setCharacterQuote(event) }} value={props.quote} />
                </div>
                <div className="form-buttonHolder">
                    <Button type='submit' variant="contained">Save</Button>
                    <Button onClick={() => { props.setEditingCard(false) }} variant="contained">Cancel</Button>
                </div>
            </Box>
        </form>
    )
}