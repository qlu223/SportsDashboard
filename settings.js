ipcMain.on("go-back", () => {
  if (win) {
    win.loadFile("index.html"); // Go back to the main page
  } else {
    console.error("win is undefined");
  }
});
