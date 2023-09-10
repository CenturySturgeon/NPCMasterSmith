import { useState } from 'react';
import { Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Tooltip from '@mui/material/Tooltip';


const CollapsableSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            {/* Flex container for icons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* FavoriteIcon on the left */}
                <Tooltip title="Add To Favorites" arrow>
                    <IconButton>
                        <StarOutlineIcon />
                    </IconButton>
                </Tooltip>

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
        </div>
    )
}

export default CollapsableSection;