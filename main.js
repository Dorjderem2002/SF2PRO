const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    minWidth: 640,
    minHeight: 480,
    titleBarStyle: "hiddenInset",
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('mainWindow.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})