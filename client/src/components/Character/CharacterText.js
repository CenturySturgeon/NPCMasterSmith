import { useState } from 'react';
import { Typography, Box, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const CharacterText = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
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
                    <StarOutlineIcon />
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
    );
}

export default CharacterText;