import { useState, useContext, useEffect } from 'react';
import { Character, putCharacter } from '../API/API';

import { Paper, Box, IconButton, Avatar, Tooltip, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVertIcon

import './CharacterCard.css'
import ActionsMenu from './ActionsMenu';
import CharacterText from './CharacterText';
import CharacterForm from './CharacterForm';
import { AppContext } from '../../App';
import { getCampaignChars } from './Utils';

export default function CharacterCard(props) {

    // Extract the theme object from the app's context
    const { themeColors } = useContext(AppContext);

    // Character properties states for two way binding when editing
    const [charName, setCharName] = useState(props.name);
    const [charCampaign, setCharCampaign] = useState(props.campaign);
    const [charIsFavorite, setCharIsFavorite] = useState(props.favorite);
    const [charQuote, setCharQuote] = useState(props.quote);
    const [charAppearance, setCharAppearance] = useState(props.appearance);
    const [charRoleplayProps, setCharRoleplayProps] = useState(props.roleplayProps);
    // Set a state for the anchor element of the menu
    const [anchorEl, setAnchorEl] = useState(null);
    // Set a state to indicate whether the character is being edited or not
    const [isEditingCard, setIsEditingCard] = useState(false);
    // Flag to trigger the PUT request only when the favorite prop changes but not when the component loads
    const [sendRequest, setSendRequest] = useState(false);

    // Set a variable to indicate wether the menu is open or not 
    const open = Boolean(anchorEl);

    // Menu event handlers
    const handleVertIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeVertIconMenu = () => {
        setAnchorEl(null);
    };

    function updateCharacterProps(newCharacter) {
        // Update the characters props
        setCharCampaign(newCharacter.Campaign);
        setCharName(newCharacter.Name);
        setCharQuote(newCharacter.Quote);
        setCharAppearance(newCharacter.Appearance);
        setCharRoleplayProps(newCharacter.Roleplay);
    }

    function toggleIsFavorite() {
        setCharIsFavorite(charIsFavorite => !charIsFavorite);
        setSendRequest(true);
    }

    useEffect(() => {
        if (sendRequest) {
            character = new Character(props.id, '', '', charIsFavorite, '', '', '', []);
            putCharacter(character, true);
            // Reset the flag to false after sending the request
            setSendRequest(false);
        }
    }, [charIsFavorite, sendRequest])

    const campaignChars = getCampaignChars(charCampaign);

    const campaignAvatar = (
        <Tooltip title={campaignChars != 'N/A' ? charCampaign : 'Not Assigned'} arrow>
            <Avatar variant="rounded"
                sx={{ position: 'absolute', top: 0, left: 0, bgcolor: themeColors.primary }}>
                {campaignChars}
            </Avatar>
        </Tooltip>
    );

    const vertIconButton = (
        <IconButton aria-label="show more"
            id="basic-button"
            className='invisible'
            style={{ position: 'absolute', top: 0, right: 0 }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleVertIconClick}>
            <MoreVertIcon />
        </IconButton>
    );

    const characterForm = (
        <CharacterForm id={props.id} campaign={charCampaign} isFavorite={charIsFavorite} name={charName}
            quote={charQuote} appearance={charAppearance} roleplayProps={charRoleplayProps} image={props.image} updateCharacterProps={updateCharacterProps} setEditingCard={setIsEditingCard} />
    );

    const characterInfo = (
        <Box className='top-bottom-holder'>
            <img className="img" src={props.image} alt="Character Image" />
            <CharacterText className='top-bottom-holder' toggleIsFavorite={toggleIsFavorite} isFavorite={charIsFavorite} name={charName} quote={charQuote} appearance={charAppearance} roleplayProps={charRoleplayProps} ></CharacterText>
        </Box>
    );
    return (
        <Grid item xs={3}>
            <Box position="relative">
                {/* Show the campaign avatar when the card is not being edited */}
                {isEditingCard ? '' : campaignAvatar}

                {/* Show the vertIcon button when the card is not being edited */}
                {isEditingCard ? '' : vertIconButton}

                {/* The actions menu is hidden by default */}
                <ActionsMenu id={props.id} anchorEl={anchorEl} setEditingCard={setIsEditingCard} closeVertIconMenu={closeVertIconMenu} open={open}></ActionsMenu>

                <Paper className='character-card' elevation={3}>
                    {/* Show the character info when the card is not being edited and the form when the card is being edited */}
                    {isEditingCard ? characterForm : characterInfo}
                </Paper>
            </Box>
        </Grid>
    );
}
