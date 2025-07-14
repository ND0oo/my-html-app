const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'icon.ico'), // 添加这行
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('editor.html')
}

app.whenReady().then(createWindow)
