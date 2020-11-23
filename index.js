const electron = require("electron");
const ipc = electron.ipcRenderer

function onRunButtonClicked()
{
	console.log("run");
	ipc.send("run-Button-Clicked");
}

function onStopButtonClicked()
{
	console.log("stop");
	ipc.send("stop-Button-Clicked");
}