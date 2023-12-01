const btn_open = document.getElementById("btn_open");
const btn_close = document.getElementById("btn_close");
const btn_status = document.getElementById("btn_status");
const fs_elm = document.getElementById("fs_elm");
const { log } = console;

btn_open.addEventListener("click", () => {
  if (document.fullscreenElement !== null) return; // 防御
  fs_elm.requestFullscreen();
});
btn_close.addEventListener("click", () => {
  if (document.fullscreenElement === null) return; // 防御
  document.exitFullscreen();
});
btn_status.addEventListener("click", () => {
  const fsElement = document.fullscreenElement;
  log(fsElement?.id);
});
