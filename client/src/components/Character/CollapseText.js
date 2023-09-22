import { Typography, Collapse } from "@mui/material";

const CollapseText = (props) => {
    return (
        <Collapse in={props.isExpanded}>
            <Typography variant="body1">
                {props.appearance}.
            </Typography>
            <Typography variant="body1">
                <ul>
                    <li>My first roleplay property.</li>
                    <li>My second roleplay property.</li>
                    <li>My third roleplay property.</li>
                </ul>
            </Typography>
        </Collapse>
    )
}

export default CollapseText;