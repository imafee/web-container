# Document-Picture-in-Picture API

画中画 API,该窗口可以放置任何 html 元素。  
画中画是指一个始终置顶的新窗口，以下简称 dpip 实例  
注意:此功能仅在安全上下文（HTTPS）中可用！

相比较 [window.open](/webapi/window-management.md) 打开窗口的不同点：

- 画中画窗口浮动在其他窗口的顶部。
- 画中画窗口的寿命永远不会超过主窗口
- 无法导航“画中画”窗口
- 无法设置画中画窗口的位置

相比较 [fullscreen](/webapi/fullscreen.md) 模式退出后元素放回了主页面，退出 dpip 模式后元素并没有放回原位。解决办法是要么深克隆主页面的元素到 pip，要么动态生成内容到 pip。

## 接口

:::details

```
DocumentPictureInPicture;
DocumentPictureInPictureEvent;
```

:::

## 实例

浏览器环境已经提供了 `window.documentPictureInPicture`实例  
以下将实例简称为 `dpip`

```js
const { documentPictureInPicture: dpip } = window;
```

`dpip.requestWindow(option)` 方法：将创建一个全局唯一的画中画窗口 (该窗口有别于 `window.open` 创建的窗口，我们简称为 `pip`)

```js
const { requestWindow } = documentPictureInPicture;
// promise
const pip = await requestWindow({
  width: 100,
  height: 100,
});
```

`dpip:enter`事件：进入画中画模式事件

```js
dpip.addEventListener("enter", (e) => handle_enter(e));

function handle_enter(event) {
  const { window: pip } = event;
  pip.document.body.appendChild(element); // 在pip文档中添加内容
}
```

## Exercises

1.  `demos/webapi/document-picture-in-picture/index.html` 画中画里插入任意元素

## Reference

关键词: `[browser、client、ui、viewport]`

浏览器兼容性: [caniuse.com](https://caniuse.com/mdn-api_documentpictureinpicture)

<!-- ![caniuse.bitsofco.de](https://caniuse.bitsofco.de/image/document-picture-in-picture.jpg) -->

相关参考：

- [w3c](https://wicg.github.io/document-picture-in-picture/)
- [caniuse](https://caniuse.com/mdn-api_documentpictureinpicture)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API)
