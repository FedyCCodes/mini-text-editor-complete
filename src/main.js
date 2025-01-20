import { app, BrowserWindow, ipcMain, shell, dialog } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { selectDirectory, selectSaveFile } from "./files/backend.js";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

function handleTestCase (event, data) {
  const webContents = event.sender
  // const win = BrowserWindow.fromWebContents(webContents)
  // win.test(data);
}


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
  
  // THIS CHUNK
  /*ipcMain.handle('test', (data) => {
    // defines an event listener
    
    console.log(data);
    const {shell} = require('electron') // deconstructing assignment

    shell.showItemInFolder('filepath') // Show the given file in a file manager. If possible, select the file.
    shell.openPath('folderpath')
    
    console.log("Talking to backend");
    
    return "Hello World";
    
  });*/
  
  // dialog.showSaveDialogSync
  ipcMain.handle('select-save-file', selectSaveFile);
  
  ipcMain.handle('select-directory', selectDirectory);
  
  // END OF THIS CHUNK

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

function setupIpcConnections() {
  
  /*ipcMain.on("askToRead", (event, file_name) => {
  	fs.readFile(path.join(__dirname, file_name),'utf8', (error, data) => {
  		win.webContents.send("sendReadContent", file_name, data);
  	})
  })
  
  ipcMain.on("askToWrite", (event, file_name, contents) => {
  	fs.writeFile(path.join(__dirname, file_name), contents, () => {});
  })*/
  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // ipcMain.on('test', handleTestCase);
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      ipcMain.on('test', handleTestCase);
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
