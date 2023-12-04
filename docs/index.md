---
aside: false
sidebar: false
outline: false
prev: false
next: false
---

# web-containers' features

## WebApi Specification

在使用 web API 时，通常我们应该使用已经实例化并挂载在 Window 对象上的对象、属性和方法，而不是使用规范定义的 Interface，因为很大一部分是无法直接使用的。

参考：

- [mdn](https://developer.mozilla.org/en-US/docs/Web/API)
- [wicg](https://wicg.io/)
- [winterCG](https://wintercg.org/work)
- [wpt](https://github.com/web-platform-tests/wpt)

### browser:视窗&视口管理

- [Fullscreen](./webapi/fullscreen.md) 将网页元素置于全屏模式。它可以用于游戏和演示文稿。
- [Picture-in-Picture](./webapi/picture-in-picture.md),视频元素画中画功能。
- [Document-Picture-in-Picture](./webapi/document-picture-in-picture.md)，任意 html 元素的画中画功能。
- Popover API,用于创建弹出菜单。它可以用于显示额外的信息或操作选项。
- Visual Viewport,提供了关于浏览器可视区域的信息。它可用于调整网页内容的布局以适应各种屏幕尺寸和分辨率。
- Page Visibility API,用于检测网页是否可见。它可以用来停止播放视频或暂停定时器等，以节省 CPU 和内存资源。
- Window Controls Overlay API Experimental,允许开发者在网页上显示自定义的窗口控件，例如关闭、最小化、最大化按钮等。这对于创建跨平台的桌面应用程序非常有用。
- Window Management API Experimental,提供了管理浏览器窗口的功能。它可以用来改变窗口的位置、大小、状态等属性。
- Presentation API Experimental,允许将网页内容投影到外部显示器上。这对于演示文稿或会议非常有用。
