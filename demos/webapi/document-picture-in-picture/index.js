const btn_open = document.getElementById("btn_open");
const btn_close = document.getElementById("btn_close");
const { log } = console;

// 主窗口的逻辑
btn_open.addEventListener("click", (e) => handle_open(e));
btn_close.addEventListener("click", (e) => handle_close(e));

// pip窗口的逻辑
documentPictureInPicture.addEventListener("enter", (e) => handle_enter(e));

// handles
async function handle_open(e) {
  const { window: pip } = documentPictureInPicture;
  if (pip) return;
  await createPip();
}
function handle_close(e) {
  const { window: pip } = documentPictureInPicture;
  if (!pip) return;
  destroyPip(pip);
}
function handle_enter(e) {
  const { window: pip } = e;
  pip.document.body.appendChild(pipContent()); // pip文档中添加内容
}
// 创建pip
async function createPip() {
  // Promise
  return window.documentPictureInPicture.requestWindow({
    width: 150,
    height: 250,
  });
}
// 销毁pip
function destroyPip() {
  const { window: pip } = documentPictureInPicture;
  pip.close();
}
// pip窗体的内容：鉴于dom操作的动态性，选择的内容会在主窗口和pip窗口之间来回移动。为避免麻烦这里使用动态生成更加方便
function pipContent() {
  let element = document.createElement("div");
  element.id = "app";
  element.innerHTML = `
    <button id="btn_close2">close pip</button>
    <p>this is pip content</p>
    `;
  element.addEventListener("click", (e) => {
    const target = e.target;
    if (target.id === "btn_close2") {
      handle_close(e);
    }
  });
  return element;
}
