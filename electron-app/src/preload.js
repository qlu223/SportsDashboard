// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("fplAPI", {
  getLeagueData: () => ipcRenderer.invoke("get-league-data"),
  getPlayerData: () => ipcRenderer.invoke("get-player-data"),
  getFilteredFixturesData: () => ipcRenderer.invoke("get-fixtures-data"),
  fetchData: () => ipcRenderer.invoke("get-data"),
});
