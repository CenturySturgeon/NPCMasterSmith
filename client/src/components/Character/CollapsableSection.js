import { useState } from 'react';
import { Typography, Collapse, IconButton } from "@mui/material";
import CollapseIcons from './CollapseIcons'


const CollapsableSection = () => {
    const [isExpanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div>
            <CollapseIcons handleExpandClick={handleExpandClick} isExpanded={isExpanded}></CollapseIcons>
            <Collapse in={isExpanded}>
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