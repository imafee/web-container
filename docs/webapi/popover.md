# Popover API

悬浮窗 API 提供了一种标准、一致、灵活的机制，用于在页面其他内容之上显示悬浮内容。其内容可以使用 HTML 属性进行声明式控制，也可以通过 JavaScript 进行控制。

内容显示在其他内容之上从而将用户的注意力吸引到需要采取的特定重要信息或行动上，这种形态有很多种叫法：

- overlays 覆盖层
- popups 弹出层
- popovers 悬浮层，本文中推荐的叫法
- dialogs 对话层
- ...

交互形态总结为 2 种：

- 模态化(modal)，这意味着当显示 popover 时，页面的其余部分将呈现为非交互式的，直到以某种方式对 popover 进行操作（例如，做出重要选择）。
- 非模态(non-modal)，这意味着在显示 popover 时可以与页面的其余部分进行交互。

## 接口

:::details
ToggleEvent
:::

## 对其他接口的扩展

属性

```js
HTMLButtonElement.popoverTargetAction; // hide,show,toggle
HTMLButtonElement.popoverTargetElement; // DOM
HTMLElement.popover; // Boolean，true to show,false to close
HTMLInputElement.popoverTargetAction;
HTMLInputElement.popoverTargetElement;
```

case

```js
if (supportsPopover()) {
  // Set the <div> element to be an auto popover
  popover.popover = "auto";
  // Set the button popover target to be the popover
  toggleBtn.popoverTargetElement = popover;

  // Set that the button toggles popover visibility
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "Popover API not supported.";
  toggleBtn.hidden = true;
}
```

方法

```
HTMLElement.hidePopover()
HTMLElement.showPopover()
HTMLElement.togglePopover()
```

事件

```
HTMLElement:beforetoggle
HTMLElement:toggle
```

## Reference

关键词: `[browser,client,ui,viewport,window]`

浏览器兼容性: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)

相关参考：

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API#browser_compatibility)
