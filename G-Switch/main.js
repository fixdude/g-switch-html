const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 853,
    height: 480,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Optional preload script
    }
  });

  // Load your index.html file
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
// Add other app lifecycle event handlers (e.g., 'window-all-closed')
