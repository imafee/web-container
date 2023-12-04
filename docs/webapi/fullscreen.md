# Fullscreen API

在全屏模式下显示指定的 html 元素（及其子元素）。  
全屏模式是指在视窗(viewport)边界之内显示元素的样子，退出后元素恢复到原来的样子。

## 接口

没有

## 对其他接口的扩展

属性

```js
// 查询全屏模式显示的元素（只读）
Document.fullscreenElement; // Element|null
// 查询全屏模式是否可用（只读）
Document.fullscreenEnabled; // Boolean
```

方法

```js
// 元素进入全屏模式
Element.requestFullscreen(); // Promise
// 退出全屏模式
Document.exitFullscreen(); // Promise
```

事件：进入和退出全屏模式都将触发

```js
// 事件的触发顺序：element 在前，document 在后
Document: fullscreenchange;
Document: fullscreenerror;
Element: fullscreenchange;
Element: fullscreenerror;
```

## Exercises

- `/demos/webapi/fullscreen/api/index.html`

  - api 的使用
  - fullscreenchange 事件的触发顺序，element 在前 document 在后

- `/demos/webapi/fullscreen/position/index.html`
  - 若元素所在页面被 iframe 加载，该元素使用 api
  - 理解了全屏模式的含义：进入全屏模式的元素，无所谓是在主页面还是在被 iframe 加载的页面里，表现是一致的。即全屏表现是参考视窗(viewport)而不是 iframe 元素的，全屏的层级在所有 html 元素之上 alert 之下的表现形式。

## Reference

关键词: `[browser、client、ui、viewport]`

浏览器兼容性: [caniuse](https://caniuse.com/fullscreen)
![caniuse.com](https://caniuse.bitsofco.de/image/fullscreen.jpg)

相关参考：

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide)
