import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import './Character.css'

export default function CharacterForm(props) {

    // States for the form text field values
    const [formData, setFormData] = useState({
        campaign: props.campaign,
        name: props.name,
        quote: props.quote,
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send PUT request

        // Update the characters props
        props.setCharCampaign(formData.campaign);
        props.setCharName(formData.name);
        props.setCharQuote(formData.quote);

        // Switch to the view mode
        props.setEditingCard(false);
    };

    // Update state when inputs change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const textFieldStyles = { marginBottom: '12px' };
    return (
        <form onSubmit={handleSubmit}>
            <img className="img" src={props.image} alt="Character Image" />
            <Box padding={1}>
                <div className="form-inputsHolder">
                    <TextField name="campaign" sx={textFieldStyles} variant="outlined" label="Campaign" onChange={handleInputChange} value={formData.campaign} />
                    <TextField name="name" sx={textFieldStyles} variant="outlined" label="Name" onChange={handleInputChange} value={formData.name} />
                    <TextField name="quote" sx={textFieldStyles} variant="outlined" label="Quote" onChange={handleInputChange} value={formData.quote} />
                </div>
                <div className="form-buttonHolder">
                    <Button type='submit' variant="contained">Save</Button>
                    <Button onClick={() => { props.setEditingCard(false) }} variant="contained">Cancel</Button>
                </div>
            </Box>
        </form>
    )
}