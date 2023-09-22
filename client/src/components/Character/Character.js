import { useState } from 'react';

import { Paper, Box, IconButton, Avatar, Tooltip, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVertIcon

import './Character.css'
import ActionsMenu from './ActionsMenu';
import CharacterText from './CharacterText';
import CharacterForm from './CharacterForm';

import { getCampaignChars } from './Utils';

export default function Character(props) {

    // Character properties states for two way binding when editing
    const [charName, setCharName] = useState(props.name);
    const [charCampaign, setCharCampaign] = useState(props.campaign);
    const [charQuote, setCharQuote] = useState(props.quote);

    // Set a state for the anchor element of the menu
    const [anchorEl, setAnchorEl] = useState(null);
    // Set a state to indicate whether the character is being edited or not
    const [isEditingCard, setIsEditingCard] = useState(false);

    // Set a variable to indicate wether the menu is open or not 
    const open = Boolean(anchorEl);

    // Menu event handlers
    const handleVertIconClick = (event) => {
        setAnchorEl(event.currentTarget);
        props.setBodyPadComp(isBodyPaddingActive => !isBodyPaddingActive);
    };
    const closeVertIconMenu = () => {
        setAnchorEl(null);
        props.setBodyPadComp(isBodyPaddingActive => !isBodyPaddingActive);
    };

    const campaignChars = getCampaignChars(charCampaign);

    const campaignAvatar = (
        <Tooltip title={campaignChars != 'N/A' ? charCampaign : 'Not Assigned'} arrow>
            <Avatar variant="rounded"
                sx={{ position: 'absolute', top: 0, left: 0, bgcolor: props.theme.palette.primary.main }}>
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
        <CharacterForm campaign={charCampaign} name={charName}
            quote={charQuote} image={props.image} setCharName={setCharName} setCharCampaign={setCharCampaign}
            setCharQuote={setCharQuote} setEditingCard={setIsEditingCard} />
    );

    const characterInfo = (
        <div>
            <img className="img" src={props.image} alt="Character Image" />
            <CharacterText name={charName} quote={charQuote}></CharacterText>
        </div>
    );

    return (
        <Grid item xs={3}>
            <Box position="relative">
                {/* Show the campaign avatar when the card is not being edited */}
                {isEditingCard ? '' : campaignAvatar}

                {/* Show the vertIcon button when the card is not being edited */}
                {isEditingCard ? '' : vertIconButton}

                {/* The actions menu is hidden by default */}
                <ActionsMenu anchorEl={anchorEl} setEditingCard={setIsEditingCard} closeVertIconMenu={closeVertIconMenu} open={open}></ActionsMenu>

                <Paper elevation={3}>
                    {/* Show the character info when the card is not being edited and the form when the card is being edited */}
                    {isEditingCard ? characterForm : characterInfo}
                </Paper>
            </Box>
        </Grid>
    );
}
