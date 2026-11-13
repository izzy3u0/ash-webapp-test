# Ash WebApp 临时测试页

独立静态测试仓库，与 Home 项目无关。使用用户提供的 A×I 图标，名称为 Ash。

- 页面：https://izzy3u0.github.io/ash-webapp-test/
- 添加到主屏幕：https://izzy3u0.github.io/ash-webapp-test/?install=1

## iPhone 使用

在 Safari 中打开安装地址，点「分享」→「添加到主屏幕」，名称保留为 Ash；如有「作为网页 App 打开」，请开启。从主屏幕启动后短暂显示图标并自动跳转到 https://chatgpt.com/。

普通访问会在 500ms 后自动跳转。安装地址在普通浏览器里停留，standalone 模式则自动跳转；禁用 JavaScript 时可手动点击「打开 ChatGPT」。

## 部署

GitHub Pages 从 `main` 分支根目录发布，`.nojekyll` 禁用 Jekyll 处理。所有资源采用相对路径，以支持仓库子路径。无构建依赖、无 Service Worker、无后端或凭据。

manifest 的 scope 仅覆盖此项目路径。ChatGPT 为外部域名，跨域跳转后的显示方式由 iOS 决定，无法保证始终无地址栏；登录状态也需在设备上验证。

Apple 参考：https://developer.apple.com/videos/play/wwdc2023/10120/
