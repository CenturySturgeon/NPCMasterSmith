import { Paper, Typography, Box, Collapse, IconButton } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVertIcon


import './Character.css'


export default function Character(props) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={3}>
            <Box position="relative">
                <IconButton
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ position: 'absolute', top: 0, right: 0 }}
                >
                    <MoreVertIcon />
                </IconButton>
                <Paper elevation={3}>
                    <img className="img" src={props.image} alt="Character Image" />
                    <Box paddingX={1}>

                        <Typography variant="h6" component="h2">
                            Name of Character
                        </Typography>
                        <Typography variant="subtitle1">
                            "Hereby is thy quote, a brief phrase said by the character"
                        </Typography>

                        {/* Flex container for icons */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {/* FavoriteIcon on the left */}
                            <IconButton>
                                <FavoriteIcon />
                            </IconButton>

                            <IconButton
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                style={{ marginLeft: 'auto', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </div>

                        <Collapse in={expanded}>
                            <Typography variant="body1">
                                A brief, physical description of the character goes here.
                            </Typography>
                            <Typography variant="body1">
                                <ul>
                                    <li>My first roleplay property.</li>
                                    <li>My second roleplay property.</li>
                                    <li>My third roleplay property.</li>
                                </ul>
                            </Typography>
                        </Collapse>

                    </Box>
                </Paper>
            </Box>
        </Grid>
    );
}
