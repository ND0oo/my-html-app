// preload.js - 解决Electron白屏问题的关键脚本

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded: 页面结构已加载');
  
  // 修复可能的内容安全策略问题
  const meta = document.createElement('meta');
  meta.httpEquiv = "Content-Security-Policy";
  meta.content = "default-src 'self' 'unsafe-inline' data:;";
  document.head.appendChild(meta);
  
  // 添加加载状态提示
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loading-screen';
  loadingDiv.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2e2e2e;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    z-index: 9999;
  `;
  loadingDiv.innerHTML = 'QtScrcpy编辑器加载中...';
  document.body.appendChild(loadingDiv);
});

window.addEventListener('load', () => {
  console.log('load: 所有资源已加载');
  // 页面加载完成后移除加载提示
  const loadingDiv = document.getElementById('loading-screen');
  if (loadingDiv) {
    loadingDiv.remove();
  }
});
