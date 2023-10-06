import { useState } from "react";
import { Box, TextField, Button, Divider } from "@mui/material";
import './CharacterCard.css'
import { Character, postCharacter, putCharacter } from "../API/API";

export default function CharacterForm(props) {

    // States for the form text field values
    const [formData, setFormData] = useState({
        campaign: props.campaign,
        name: props.name,
        quote: props.quote,
        appearance: props.appearance,
        roleplayProps: props.roleplayProps,
    });

    // Handles the server response for the POST request
    function handlePostResponse(data, characterData) {
        props.setId(data.id);
        props.updateCharacterProps(characterData);
        props.setEditingCard(false);
    }

    // Handles the server response for the PUT request
    function handlePutResponse(responseStatus, characterData) {
        if (responseStatus === 200) {
            // Update the characters props
            props.updateCharacterProps(characterData);
            // Switch the card to view mode
            props.setEditingCard(false);
        }
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const id = e.target.id;

        // Create a new character instance
        const newCharacter = new Character(id, formData.campaign, '', props.isFavorite, formData.name, formData.quote, formData.appearance, formData.roleplayProps);

        if (id != 0) {
            // Send PUT request
            putCharacter(newCharacter)
                // Handle the response if the request succeeds
                .then(responseStatus => { handlePutResponse(responseStatus, newCharacter) })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle errors if the request fails
                });
        } else {
            // Send POST request
            postCharacter(newCharacter)
                // Handle the response if the request succeeds
                .then(data => { handlePostResponse(data, newCharacter) })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle errors if the request fails
                });
        }
    };

    // Update state when inputs change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle the roleplay properties changes
    const handleRoleplayChange = (e) => {
        // The name serves as the index in this case
        const { name, value } = e.target;
        const updatedRoleplayProps = [...formData.roleplayProps];
        updatedRoleplayProps[name] = value;
        setFormData({
            ...formData,
            ["roleplayProps"]: updatedRoleplayProps,
        });
    };

    const textFieldStyles = { marginBottom: '12px' };
    return (
        <form id={props.id} onSubmit={handleSubmit}>
            <img className="img" src={props.image} alt="Character Image" />
            <Box padding={1}>
                <div className="form-inputsHolder">
                    <TextField name="campaign" sx={textFieldStyles} variant="outlined" label="Campaign" onChange={handleInputChange} value={formData.campaign} />
                    <TextField name="name" sx={textFieldStyles} variant="outlined" label="Name" onChange={handleInputChange} value={formData.name} />
                    <TextField name="quote" sx={textFieldStyles} variant="outlined" label="Quote" onChange={handleInputChange} value={formData.quote} />
                    <TextField name="appearance" sx={textFieldStyles} variant="outlined" label="Appearance" onChange={handleInputChange} value={formData.appearance} />
                </div>
                <Divider />
                <div className="form-roleplayHolder">
                    {formData.roleplayProps.map((item, index) => (
                        <TextField key={index} name={index} sx={textFieldStyles} variant="outlined" label="Roleplay Property" onChange={handleRoleplayChange} value={item} />
                    ))}
                </div>
                <div className="form-buttonHolder">
                    <Button type='submit' variant="contained">Save</Button>
                    <Button onClick={() => {props.isOnlyCard ? console.log("Redirecting to Home...") : props.setEditingCard(false) }} variant="contained">Cancel</Button>
                </div>
            </Box>
        </form>
    )
}