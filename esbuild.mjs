import * as esbuild from 'esbuild'
import { spawn } from 'child_process';

// This file has a .mjs extension since its syntax would not work on a regular .js file due to node (refer to esbuild's documentation for more)
let ctx = await esbuild.context({
    entryPoints: ["frontend/Application.tsx", "frontend/*.css"],
    outdir: "./public/esbundle/",
    bundle: true,
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
