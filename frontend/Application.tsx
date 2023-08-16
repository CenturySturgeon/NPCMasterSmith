import React from "react";
import { createRoot } from 'react-dom/client';

function Application (){
    return <div>Application</div>
}

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(<Application/>);