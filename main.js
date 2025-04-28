const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const isDev = process.env.NODE_ENV !== 'development';

const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("./data/prem_table.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
const createWindow = () => {
    const win = new BrowserWindow({
        title: 'SportsDashboard',
        width: isDev ? 1000 : 500,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
            }
    })
    if(isDev){
        win.webContents.openDevTools()  
    }

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})