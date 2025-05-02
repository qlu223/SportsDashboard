const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron/main");
const path = require("node:path");
const isDev = process.env.NODE_ENV !== "development";
let win;
const createWindow = () => {
  win = new BrowserWindow({
    title: "SportsDashboard",
    width: isDev ? 1000 : 500,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  if (isDev) {
    win.webContents.openDevTools();
  }

  win.loadFile("index.html");
};
ipcMain.on("open-settings", () => {
  if (win) {
    win.loadFile("settings.html"); // Load settings page in the same window
  } else {
    console.error("mainWindow is undefined");
  }
});
ipcMain.handle("dark-mode:toggle", () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle("dark-mode:system", () => {
  nativeTheme.themeSource = "system";
});

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
