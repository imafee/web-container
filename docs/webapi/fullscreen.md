# Fullscreen API

在全屏模式下呈现特定元素（及其子元素）。所谓全屏模式是指元素的渲染依据视窗(viewport)的位置和边界。

![caniuse.com](https://caniuse.bitsofco.de/image/fullscreen.jpg)

## Interface

Fullscreen API 没有自己的接口。相反，它扩展了其他几个接口，以添加提供全屏功能所需的方法、属性和事件。

## Instance

### Properties

```js
Document.fullscreen (废弃!)
// 查询全屏模式显示的元素（只读）
Document.fullscreenElement // 有则返回Element，没有则返回null
// 查询全屏模式是否可用（只读）
Document.fullscreenEnabled // Boolean类型
```

### Methods

返回的 promise 的状态即动作的执行结果。

```js
Document.exitFullscreen(); // Promise
Element.requestFullscreen(); // Promise
```

### Events

change 的含义：进入和退出全屏模式都将触发事件

事件的触发顺序：element 在前，document 在后

```js
Document: fullscreenchange;
Document: fullscreenerror;
Element: fullscreenchange;
Element: fullscreenerror;
```

## Exercises

1.  练习：页面中的元素使用 api `/demos/webapi/fullscreen/api/index.html`

    - 验证了 fullscreenchange 事件的先后顺序，element 在前 document 在后

1.  练习：被 iframe 加载的页面，该页面中的元素使用 api `/demos/webapi/fullscreen/position/index.html`

    - 理解了全屏模式的含义：进入全屏模式的该元素与主页面的元素进行比较，发现表现是一致的。即元素的位置、大小都是参考视窗(viewport)而不是 iframe 元素的，层级所有在 html 元素之上(alert 之下)的表现形式。

## Reference

关键词: `[browser、client、ui、viewport]`

相关参考：

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide)
