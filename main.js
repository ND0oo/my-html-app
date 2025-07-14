const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "QtScrcpy映射编辑器 v2.0",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false // 添加这行解决安全策略问题
    }
  })

  // 使用绝对路径加载文件
  win.loadFile(path.resolve(__dirname, 'editor.html'))
  
  // 添加开发者工具用于调试（调试完成后可移除）
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
