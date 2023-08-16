import React from "react";
import { createRoot } from 'react-dom/client';

function Application (){
    return <p>Application</p>
}

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(<Application/>);