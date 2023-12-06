# Window Management API

窗口管理 API, 顾名思义是关于一切窗口（系统和浏览器）的管理，提供了更健壮、更灵活的窗口管理，为更有效的多屏幕应用程序铺平道路。

从历史上看我们这样使用窗口管理：

- `Window.open()`来管理与当前应用程序相关的浏览器窗口——打开新窗口、调整大小和关闭现有窗口等。如果要将窗口移动到辅助显示，可以使用 `window.moveTo()`，但必须根据窗口在设置中相对于主显示的位置来猜测要使用的坐标。很受限制。
- `Window.screen` 属性中检索有关屏幕的信息，例如可用于放置窗口的屏幕空间大小。可是只返回有关主屏幕的数据，而不返回设备可用的辅助显示。很受限制。

窗口管理 API 提供了更健壮、更灵活的窗口管理。
它允许您查询您的显示器是否扩展了多个屏幕，并获取每个屏幕的信息，然后可以根据需要在每个屏幕中放置窗口。
它还提供了事件处理程序，允许您对可用屏幕中的更改做出响应，提供了新的全屏功能以选择将哪个屏幕置于全屏模式（如果有的话），还提供了权限功能以控制对 API 的访问。

注意：
每个 `Window.open()`调用都需要一个单独的用户手动事件。这个安全举措可以防止网站向用户发送大量窗口的垃圾邮件。然而，这给多窗口应用程序带来了一个问题。  
要绕过此限制，您可以将应用程序设计为一次打开不超过一个新窗口，重用现有窗口以显示不同的页面，或者建议用户如何更新浏览器设置以允许多个窗口。

窗口管理 API 在以下多屏场景很有用：

- 多窗口图形编辑器和音频处理器，可能希望在不同屏幕上排列编辑工具和面板。
- 虚拟交易台，希望在多个窗口中显示市场趋势，并将感兴趣的特定窗口置于全屏模式。
- 要在内部主屏幕上显示演讲者笔记，在外部投影仪上显示演示文稿的幻灯片放映应用程序。

## 接口

:::details
ScreenDetails // 所有可用屏幕的详细信息，https
ScreenDetailed // 特定屏幕的详细信息，https
:::

## 对其他接口的扩展

```js
Screen.isExtended; // 是否有扩展屏幕
Element.requestFullscreen(); // 元素全屏
Window.getScreenDetails(); // 获取所有屏幕的信息
```

Screen: change 屏幕改变事件  
触发条件：屏幕宽度、高度、可用宽度、可用高度、色深、方向

```js
// 举例
const firstScreen = (await window.getScreenDetails()).screens[0];
firstScreen.addEventListener("change", (event) => {
  console.log("The first screen has changed.", event, firstScreen);
});
```

## Reference

关键词: `[browser,client,ui,viewport,window]`

浏览器兼容性: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API#browser_compatibility)

<!-- [caniuse](https://caniuse.com/mdn-api_windowmanagement) -->

相关参考：

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API)
