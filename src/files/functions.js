// files/functions.js
const { shell, ipcRenderer } = require("electron");
const fs = require("fs");

export function saveFile(filePath, code) {
  fs.writeFileSync(filePath, code);
}

export async function saveFileAs(code) {
  
  const exportPath = await ipcRenderer.invoke('select-save-file', 'export');
  
  fs.writeFileSync(exportPath, code);
  
}

export async function openDirectory(callback) {
  
  const exportPath = await ipcRenderer.invoke('select-directory', 'export');
  
  console.log("Clicking", exportPath);
  callback(exportPath);
}

