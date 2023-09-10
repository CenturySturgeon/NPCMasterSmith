import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { IconButton } from "@mui/material";

import Tooltip from '@mui/material/Tooltip';

const CollapseIcons = (props) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Icons to the left */}
            <Tooltip title="Add To Favorites" arrow>
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
            </Tooltip>

            {/* Expand section icon */}
            <IconButton
                onClick={props.handleExpandClick}
                aria-expanded={props.isExpanded}
                aria-label="show more"
                style={{ marginLeft: 'auto', transform: props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    );
}

export default CollapseIcons;