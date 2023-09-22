import { Typography, Collapse } from "@mui/material";

const CollapseText = (props) => {
    console.log("XXXXXX",props.roleplayProps)

    return (
        <Collapse in={props.isExpanded}>
            <Typography variant="body1">
                {props.appearance}.
            </Typography>
            <Typography variant="body1">
                <ul>
                    {props.roleplayProps.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </Typography>
        </Collapse>
    )
}

export default CollapseText;