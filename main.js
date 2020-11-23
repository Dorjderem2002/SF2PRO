const electron = require("electron");

const { app, BrowserWindow, globalShortcut } = electron;
const ipc = electron.ipcMain
const Menu = electron.Menu

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    minWidth: 640,
    minHeight: 480,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('mainWindow.html')
  win.webContents.openDevTools()
}

app.on("ready", function() {
  createWindow();


  //create Menu
  const template = [
    {
      label: ""
    },
    {
      label: "File",
      submenu:[
        {
          label: "NewFile"
        }
      ]
    },
    {
      label: "Edit",
      submenu:[
        {
          label: "Copy"
        }
      ]
    }
  ]

  const mainMenu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(mainMenu);


  globalShortcut.register('CommandOrControl+q', () => {
    app.quit();
  })
  globalShortcut.register('CommandOrControl+v', () => {
    pasteText();
  })
  globalShortcut.register('CommandOrControl+n', () => {
    console.log("create new file");
  })
  globalShortcut.register('CommandOrControl+s', () => {
    console.log("save project");
  })
  

})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//Getting Button events from index.js and MainWindow.html
ipc.on("run-Button-Clicked",function(event){
  runCode();
})

ipc.on("stop-Button-Clicked",function(event)
{
  stopProgram();
})


function runCode()
{
  compileCode();
  runProgram();
}

//Puma
function compileCode()
{
  
}

function runProgram()
{

}

function stopProgram()
{

}






