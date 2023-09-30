import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { IconButton } from "@mui/material";

import Tooltip from '@mui/material/Tooltip';

const CollapseIcons = (props) => {

    const isFavorite = props.isFavorite;

    const handleFavoriteClick = () => {
        props.toggleIsFavorite();
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Icons to the left */}
            <Tooltip title="Add To Favorites" arrow>
                <IconButton onClick={handleFavoriteClick}>
                    {isFavorite ? <StarIcon color="primary"/> : <StarOutlineIcon />}
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