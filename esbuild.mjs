import * as esbuild from 'esbuild'
import { exec } from 'child_process';

// This file has a .mjs extension since its syntax would not work on a regular .js file due to node (refer to esbuild's documentation for more)

let ctx = await esbuild.context({
    entryPoints: ["frontend/Application.tsx", "frontend/esbuild.css"],
    outdir: "./public/esbundle/",
    bundle: true,
    minify: true,
    plugins: [],
    })
    
await ctx.watch()
console.log('⚡ Watching on Port: 8000 ⚡')

// Since the package.json dev script can't run two commands at once, the server running command must be ran from here
exec('cd server/ && air', (err, stdout, stderr) => {
    if (err) {
      console.error('Error running air command:', err);
      return;
    }
    console.log(stdout);
  });