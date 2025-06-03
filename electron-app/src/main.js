import BootstrapAPI from "../data/bootstrap_api.js";
import FixturesAPI from "../data/fixtures.js";

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const axios = require("axios");

const bootstrap_api = new BootstrapAPI();
const fixture_api = new FixturesAPI();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

// Create window to run app in
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Close window
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Handle league data call in renderer.js

ipcMain.handle("get-league-data", async () => {
  return bootstrap_api.getLeagueData();
});

// Handle get data call in renderer.js

ipcMain.handle("get-data", async () => {
  return bootstrap_api.fetchData();
});

// Handle player data call in renderer.js

ipcMain.handle("get-player-data", async () => {
  return bootstrap_api.getPlayerData();
});

// Handle fixtures data call in renderer.js

ipcMain.handle("get-fixtures-data", async () => {
  return fixture_api.getFixturesData();
});
