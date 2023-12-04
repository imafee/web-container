# WebApi 协议归类 TODO

## 浏览器的导航和视区（navigation view ）

- VirtualKeyboard API Experimental,用于控制和定制虚拟键盘的 API。它可以用来显示、隐藏虚拟键盘，改变其大小、位置等属性。
- Web Animations,用于创建复杂的动画效果。它可以结合 CSS、JavaScript 等技术来创建令人惊叹的视觉体验。

- Navigation API Experimental,这个 API 提供了关于网页导航的相关信息。它可用于检测用户的行为，例如回退、前进、刷新等。
  - History API、window.location 已经被上面的标准所覆盖。
- Pointer Lock API,用于锁定鼠标指针的位置。这对于创建第一人称射击游戏或其他需要精确控制的游戏非常有用。
- View Transitions API Experimental,允许网页元素在视图之间平滑地过渡。它可用于创建复杂的动画效果或动态布局。

## 文档与模型 document model

- Web Components,包含了自定义元素、Shadow DOM、HTML 模板等一系列规范
- SVG，矢量图像。它允许通过 XML 语法来描述形状、颜色、文本等图形元素，并支持 CSS 样式和 JavaScript 脚本来增强功能。
- DOM，document object model，W3C 推荐的标准，用于表示和操作 XML 或 HTML 文档的结构和内容。
- HTML DOM，是 DOM 的一个变体，专用于 HTML 文档。
- HTML Drag and Drop API，允许拖拽 HTML 元素并在页面内或页面间移动它们。
- HTML Sanitizer API Experimental，允许清除潜在有害的 HTML 代码，以防止恶意攻击和 XSS 攻击。它可以在接收用户输入时使用，以保护网站的安全性。
- CSSOM，css object model,用于表示和操作 CSS 规则
- CSS Counter Styles，用于定义数字、字母等计数器样式。
- CSS Custom Highlight API Experimental，自定义突出显示文本的样式，例如背景色、边框等。它可以用于突出显示搜索结果、高亮关键词等。
- CSS Font Loading API，控制字体的加载和显示过程。它可用于改进用户体验，尤其是当网页需要加载大容量字体文件时。
- CSS Painting API Experimental，通过 css 渲染通道直接在画布上绘制和操作图像。它可用于创建动态图形、可视化图表等。
- CSS Properties and Values API，动态设置 CSS 属性值。它可用于实现动画效果、自适应布局等功能。
- CSS Typed Object Model API，通过类型化的对象来访问和操作 CSS 规则。它可用于提高可读性和易用性，以及避免错误。

## 事件模型 Event model

- Device Orientation Events，允许获得设备的朝向信息。它可以用于导航应用和移动应用。
- Pointer Events，获得触控、鼠标、笔输入等多种指针事件。它可以用于交互式应用和游戏。
- Server Sent Events，允许服务器发送事件到客户端。它可以用于实时更新和新闻推送。
- Touch Events，允许获得触摸事件。它可以用于移动和触摸屏设备上的应用程序。
- UI Events，用户界面事件。比如获得鼠标点击、滚动等，它可以用于动态交互和用户体验优化。

## 观察者 Observer

- Mutation Observer,监听 DOM 中的变化，并提供通知。它可以用于监控 DOM 树的修改，例如添加、删除和修改节点。
- Intersection Observer,检测某个元素是否可见。它可以用于交互式内容和广告显示。
- Resize Observer,监听元素大小的变化。它可以用于动态调整内容和布局。
- Performance Observer,监听性能指标，例如网页加载和运行时性能。它可以用于性能优化和监控。

## 数据处理 Handling

- Geometry Interfaces，定义了一系列几何接口，例如 Point、Rect 等，用于表示坐标和几何形状。
- Compression Streams API,允许压缩和解压二进制数据。它可以用于数据压缩和文件存储。
- Encoding API,允许编码和解码文本数据。它可以用于文本处理和国际字符集支持。
- Streams,允许操作和组合二进制流。它可以用于大数据传输和媒体流。
- URL API,解析 URL 字符串，并生成新 URL。它可以用于链接和重定向。
- URL Pattern API Experimental,生成 URL 正则表达式。它可以用于网址检查和路由匹配。
- WebCodecs API,用于多媒体编解码器。它可以用于视频编码和图像处理。
- Web Crypto API,加密和解密数据。它可以用于密码学应用和服务端认证。

## 存储 Storage

Storage Access API,访问第三方存储数据，包括 cookies、IndexedDB 和 localStorage。它可以用于在线账户同步和跨站点共享数据。
Web Storage API,在本地存储少量的数据，并且具有更好的性能和可靠性。它可以用于保存登录凭据、临时数据和设置选项等功能。是通用的本地存储解决方案。

```
- cookie
- application caches
- Cache API
- web store
  - localStorage,
  - sessionStorage,
- Indexed DB
```

## 数据通信(message communication)

- Fetch API，允许发起 HTTP 请求。它可以用于获取资源和数据。
- XMLHttpRequest API，允许发起 HTTP 请求，并返回响应。它可以用于数据加载和 AJAX 请求。
- Websockets API，允许在客户端和服务器之间保持持久连接。它可以用于实时通信和游戏应用。
- Channel Messaging API，允许共享数据和消息。它可以用于多窗口和多进程应用。
- Broadcast Channel API，允许多个窗口或标签页之间通信。它可以用于协同编辑和多用户应用。
- Bluetooth API Experimental，允许访问蓝牙设备，例如健康追踪器和智能手表。它可以用于物联网应用和智能家居。
- Beacon，允许发送小量数据到服务器。它可以用于性能监控和计数。

## 任务(task thread worker background schedule Priority)

---- thread --------

- Web Workers API，在后台线程执行计算密集型任务，以免阻塞主线程上的其他任务。它通常用于大数据处理、游戏渲染和其他 CPU 密集型任务。
- Service Workers API，接管 http（拦截网络请求以缓存或更新页面的内容）允许网页离线工作。它也可以预加载资源并改善页面的首次打开时间。

-----task 任务调度与资源管理 -----

- timer: setInterval/settimeout,事实标准但没有规范
- Web Locks API,锁定资源，例如 CPU 和 GPU。它可以用于性能优化和资源管理。
- Background Fetch API Experimental，允许后台下载文件。它可以用于离线存储和图片加载。
- Background Sync Experimental，允许在离线状态下重新尝试失败的任务。它可以用于离线应用和缓存刷新。
- Background Tasks schedue 任务调度
- Prioritized Task Scheduling API，优先执行任务。它可以用于实时应用和高性能计算。

## 绘画系统 Draw-system (gpu draw)

- Canvas API,在 canvas 元素上进行轻量级图形处理，不支持硬件加速功能。它可以用于游戏开发、UI 组件绘制等。
- WebGL，在 canvas 元素上使用 OpenGL ES 2.0 渲染高性能 2D 和 3D 图形的 API。它是基于底层图形库构建的，可以利用硬件加速功能，因此能够快速渲染复杂的图形和图像。它可以用于游戏开发和三维建模。
- WebGPU API Experimental，使用现代显卡加速图形渲染。它可以用于极致性能的游戏和图形应用。

## 通用业务解决方案(resolve)

----鉴权(鉴定身份和权限授予)-----

- FedCM API Experimental，联合凭据管理 API 为身份提供者（IdP）提供了一种标准机制，使身份联合服务以保密的方式在网络上可用，而不需要第三方 cookie 和重定向。
- Web Authentication API,使用物理设备进行身份验证。它可以用于安全性高的应用，例如银行和社交网络。
- Permissions API，询问用户的权限，例如地理位置和相机。它可以用于权限管理和隐私保护。

------支付-------

- Payment Handler API Experimental,支付业务支持 PWA。它可以用于电子商务和钱包应用。
- Payment Request API，在网页上收集付款信息。它可以用于购物车和支付网关。

------安全和稳定--------

- Trusted Types API,限制 JavaScript 执行环境中的字符串类型。它可以用于防止跨站脚本攻击。
- Reporting API Experimental，报告错误和崩溃。它可以用于维护和诊断。

-----dev-tool 工具-----

- Console API,允许在控制台输出消息。它可以用于调试和日志记录。

---- 流媒体处理 stream media--------

- Audio Output Devices API Experimental，访问音频设备，例如扬声器和耳机，并控制音量、静音等功能。

- Encrypted Media Extensions，解密加密的媒体文件，并将其提供给 HTML5 video 元素。它可以用于在线视频流应用和 DRM 保护的应用。
- EyeDropper API Experimental，从屏幕上拾取颜色。它可以用于制作色彩编辑器或图片处理应用。
- Media Capabilities API，获取和检查硬件设备的能力，例如屏幕尺寸和方向、摄像头和麦克风可用性等。它可以用于动态调整网页内容和 UI。
- Media Capture and Streams，捕获音频和视频流，并将它们转换成 MediaStream 对象。它可以用于视频聊天和直播应用。
- Media Session API，创建和管理音频和视频流。它可以用于创建可交互的媒体播放器？？
- Media Source Extensions Experimental，将媒体数据分割成较小的块，并动态更改编码或质量。它可以用于实时视频流和视频点播应用。
- MediaStream Recording，捕获 MediaStream 或 HTMLMediaElement 对象生成的数据，用于分析、处理或保存到磁盘。
- Web Audio API，创建和处理音频效果，例如混响、均衡器、延迟等。它可用于声音处理和音频合成应用。
- Web MIDI API，访问 MIDI 设备，例如键盘、控制器和合成器。它可以用于音乐创作和 MIDI 控制台应用。

----本地服务-----

- Barcode Detection API Experimental,允许扫描条形码和二维码。它可以用于商品跟踪和支付验证。
- Network Information API Experimental，允许查询网络状况。它可以用于网络检测和性能优化。
- Battery API,获取电池的状态和信息，例如电量、充电状态等。它可以用于节能应用和电量指示器。
- Clipboard API,允许复制粘贴文本、图片和文件等内容。
- File API，访问本地文件系统。它可以用于文件管理器和离线缓存应用。
- File System API，访问本地文件系统的文件和文件夹。它可以用于文件管理和备份应用。
- File and Directory Entries API，读写文件和文件夹。它可以用于文件传输应用和文件编辑器。
- Gamepad API，访问游戏手柄等设备，例如控制器和键盘。它可以用于视频游戏和模拟器。
- Geolocation API,获取地理位置。它可以用于地图应用和地理定位功能。
- Idle Detection API Experimental,检测用户是否闲置,它可以用于节能应用和通知提醒。
- Image Capture API Experimental,访问相机和视频设备，并拍照和录制视频。它可以用于拍照应用和照片分享应用。
- Ink API Experimental,记录笔迹输入。它可以用于绘画应用和笔记应用。
- Keyboard API Experimental,处理键盘输入，例如快捷键和特殊键。它可以用于键盘助手和虚拟键盘。
- Launch Handler API Experimental,启动和控制应用。它可以用于本地应用调用和第三方插件。
- Local Font Access API Experimental,下载和安装本地字体。它可以用于排版和设计应用。
- WebHID API Experimental,访问 HID 设备，例如手柄、摇杆、鼠标等。它可以用于游戏和虚拟现实应用。
- WebOTP API,允许发送和接收短信验证码。它可以用于身份验证和安全应用。
- WebRTC,实现实时语音和视频通信。它可以用于聊天应用和视频会议。
- WebTransport API,允许建立可靠的数据通道。它可以用于实时通信和文件传输。
- WebUSB API Experimental,访问 USB 设备。它可以用于外设驱动和打印机控制。
- [Deprecated]WebVR API Non-standard
- WebVTT,添加字幕和语音转文本功能。它可以用于电影和教育视频。
- WebXR Device API Experimental,访问 VR 和 AR 设备，例如头盔和控制器。它可以用于虚拟现实和混合现实应用。
- Screen Capture API,捕获屏幕截图和录像。它可以用于演示和分享应用。
- Screen Orientation API,更改屏幕的方向。它可以用于旋转屏幕和双屏显示。
- Screen Wake Lock API,防止屏幕自动休眠。它可以用于播放视频和游戏应用。
- Selection API,获取和设置用户的选择。它可以用于文本编辑器和网页元素选中状态管理。
- Sensor API,访问传感器，例如加速度计、陀螺仪、磁力计等。它可以用于运动感应和手机游戏应用。
- Web NFC API Experimental,访问 NFC 设备。它可以用于支付和传输应用。
- Web Serial API Experimental,访问串行设备。它可以用于硬件控制和自动化应用。
- Web Share API,利用底层操作系统的共享机制，将文本、链接、文件和其他内容共享给用户选择的共享目标。这些共享目标通常包括系统剪贴板、电子邮件、联系人或消息应用程序以及蓝牙或 Wi-Fi 信道。
- Web Speech API,识别语音和合成语音。它可以用于自然语言处理和语音识别应用。
- User-Agent Client Hints API Experimental,获取客户端的信息，例如设备和操作系统。它可以用于网站自适应和统计分析。
- Vibration API,允许震动设备。它可以用于游戏和警报应用。
- Web Notifications,发送和展示通知。它可以用于提醒和即时通讯应用。
- Push API，发送 push 消息。它可以用于新闻订阅和提醒应用。

------其他-------

- Performance API，访问性能指标，例如页面加载时间和内存使用情况。它可以用于性能优化和监控。
- Periodic Background Sync Experimental，定期更新网页。它可以用于推送通知和动态更新。
- Speculation Rules API Experimental，推测执行脚本和优化性能。它可以用于高性能应用和脚本加载。
