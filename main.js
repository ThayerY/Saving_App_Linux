// main.js

import { app, BrowserWindow } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// const PORT = process.env.PORT || 5001;

// Reconstruct __dirname in ES module environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;
let backendProcess;

function startBackendServer() {

  console.log('Running backend from directory:', __dirname);
  // Start the server.js file from the 'app' folder.
  // Adjust the command if you use something other than `node server.js`.
  backendProcess = spawn('node', ['app/server.js'], {
    cwd: __dirname,
    shell: true,
    env: process.env,
  });

  backendProcess.stdout.on('data', (data) => {
    const output = data.toString().trim();
    console.log(`[backend]: ${output}`);

    // Adjust this condition to match whatever your server prints when it's ready.
    // For example, if server.js prints "Listening on port 3000", use that:
    if (output.includes('Server running on http://localhost:5001')) {
      // Once the backend is ready, load the frontend from it.
      // If your server listens on http://localhost:5001, use that URL.
      mainWindow.loadURL('http://localhost:5001');
    }
  });

  backendProcess.stderr.on('data', (data) => {
    console.error(`[backend error]: ${data}`);
  });

  backendProcess.on('close', (code) => {
    console.log(`Backend exited with code ${code}`);
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    // No preload since i don't have a preload.js
    webPreferences: {}
  });

  // Start the backend server first
  startBackendServer();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (backendProcess) {
    backendProcess.kill();
  }
  if (process.platform !== 'darwin') app.quit();
});









//--------------------------------------------------------------------------------
//-------------------------------------------------------------------------------




// import { app, BrowserWindow } from 'electron';
// import { screen } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // const PORT = process.env.PORT || 5001;

// // Reconstruct __dirname in ES module environment
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let backendProcess;

// function startBackendServer() {

//   console.log('Running backend from directory:', __dirname);
//   // Start the server.js file from the 'app' folder.
//   // Adjust the command if you use something other than `node server.js`.
//   backendProcess = spawn('node', ['app/server.js'], {
//     cwd: __dirname,
//     shell: true,
//     env: process.env,
//   });

//   backendProcess.stdout.on('data', (data) => {
//     const output = data.toString().trim();
//     console.log(`[backend]: ${output}`);

//     // Adjust this condition to match whatever your server prints when it's ready.
//     // For example, if server.js prints "Listening on port 3000", use that:
//     if (output.includes('Server running on http://localhost:5001')) {
//       // Once the backend is ready, load the frontend from it.
//       // If your server listens on http://localhost:5001, use that URL.
//       mainWindow.loadURL('http://localhost:5001');
//     }
//   });

//   backendProcess.stderr.on('data', (data) => {
//     console.error(`[backend error]: ${data}`);
//   });

//   backendProcess.on('close', (code) => {
//     console.log(`Backend exited with code ${code}`);
//   });
// }

// function createWindow() {
//   const { width } = screen.getPrimaryDisplay().workAreaSize;
//   mainWindow = new BrowserWindow({
//     width: Math.round(width * 0.8), // 80% of screen width
//     height: 900,
//     webPreferences: {}
//   });

//   // Start the backend server first
//   startBackendServer();
// }


// app.whenReady().then(() => {
//   createWindow();

//   app.on('activate', function () {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on('window-all-closed', function () {
//   if (backendProcess) {
//     backendProcess.kill();
//   }
//   if (process.platform !== 'darwin') app.quit();
// });


