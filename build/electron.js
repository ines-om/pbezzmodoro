const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const path = require('path');

// Replace electron-is-dev with direct environment check
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400, 
    height: 455,
    frame: false,
    transparent: true,
    resizable: false,
    show: false, 
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Uncomment if you are using preload script
      // preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadURL('http://localhost:3000');

  // Wait until the window is ready to show before showing it
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


// Listen for close event
ipcMain.on("close-app", () => {
  if (mainWindow) {
    mainWindow.close(); // Close the main window
  }
});

// Listen for minimize event
ipcMain.on("minimize-app", () => {
  if (mainWindow) {
    mainWindow.minimize(); // Minimize the main window
  }
});

// Ensure the app quits when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on("toggle-always-on-top", () => {
  if (mainWindow) {
    const current = mainWindow.isAlwaysOnTop();
    mainWindow.setAlwaysOnTop(!current);
  }
});