const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 修复路径问题
  win.loadFile(path.join(__dirname, 'editor.html'))
}

app.whenReady().then(createWindow)
