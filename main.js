const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "QtScrcpy映射编辑器 v2.0",
    backgroundColor: '#2e2e2e', // 设置背景色避免闪烁
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // 禁用上下文隔离
      webSecurity: false, // 禁用web安全策略
      allowRunningInsecureContent: true, // 允许不安全内容
      preload: path.join(__dirname, 'preload.js') // 添加preload脚本
    }
  })

  // 加载HTML文件
  win.loadFile(path.join(__dirname, 'editor.html'))
  
  // 打开开发者工具（调试用，发布时可移除）
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
