import { Box, TextField, Button } from "@mui/material";
import './Character.css'

export default function CharacterForm(props) {
    return (
        <form>
            <img className="img" src={props.image} alt="Character Image" />
            <Box padding={1}>
                <TextField label="Campaign" value={props.campaign} variant="outlined" />
                <TextField label="Name" value={props.name} variant="outlined" />
                <TextField label="Quote" value={props.quote} variant="outlined" />
                <div>
                    <Button type='submit' variant="contained">Save</Button>
                    <Button onClick={() => { props.setEditingCard(false) }} variant="contained">Cancel</Button>
                </div>
            </Box>
        </form>
    )
}