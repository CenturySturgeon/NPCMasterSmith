import * as esbuild from 'esbuild'
import { spawn } from 'child_process';

// This file has a .mjs extension since its syntax would not work on a regular .js file due to node (refer to esbuild's documentation for more)
let ctx = await esbuild.context({
    entryPoints: ["./client/src/index.js"],
    outdir: "./client/public/esbundle/",
    bundle: true,
    // Avoid having to manually import your JSX library into each file (import * as React from 'react') 
    jsx: 'automatic',
    // Enables JSX syntax for JS files. Allows png images, .woof, and .woff2 font files to be imported from relative paths and import statements
    loader: { '.js': 'jsx', '.png': 'dataurl', '.woff': 'dataurl', '.woff2': 'dataurl' },
    minify: true,
    plugins: [],
});
    
await ctx.watch();
console.log('⚡ Watching ⚡');

// Since the package.json dev script can't run two commands at once due to esbuild.mjs watch mode leaving the process running in a loop, the server running process (air) must be spawned from this script.
const airProcess = spawn('air', [], { cwd: 'server/', stdio: 'inherit' });

airProcess.on('error', (err) => {
    console.error('Error running air command:', err);
});

airProcess.on('close', (code) => {
    console.log(`air process exited with code ${code}`);
});
