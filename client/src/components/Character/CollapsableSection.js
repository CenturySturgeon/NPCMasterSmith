import { useState } from 'react';

import CollapseIcons from './CollapseIcons'
import CollapseText from './CollapseText';


const CollapsableSection = (props) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div>
            <CollapseIcons handleExpandClick={handleExpandClick} isExpanded={isExpanded}></CollapseIcons>
            <CollapseText appearance={props.appearance} isExpanded={isExpanded}></CollapseText>
        </div>
    )
}

export default CollapsableSection;