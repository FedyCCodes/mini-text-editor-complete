// backend.js
import { app, dialog } from 'electron';

export async function selectSaveFile (event, operation) {
  
  const result = await dialog.showSaveDialog({
    properties: ['createDirectory']
  });
  
  return result.canceled ? null : result.filePath;
  
}

export async function selectDirectory (event, operation) {
  
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory', 'createDirectory']
  });
  
  return result.canceled ? null : result.filePaths[0];
  
}
