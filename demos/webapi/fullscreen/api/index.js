const btn_open = document.getElementById("btn_open");
const btn_close = document.getElementById("btn_close");
const btn_status = document.getElementById("btn_status");
const fs_elm = document.getElementById("fs_elm");
const { log } = console;

// interactive
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

// event: fullscreenchange
document.addEventListener("fullscreenchange", (e) => {
  console.log("Document:fullscreenchange", e);
});
document.addEventListener("fullscreenerror", (e) => {
  console.log("Document:fullscreenerror", e);
});
fs_elm.addEventListener("fullscreenchange", (e) => {
  console.log("Element:fullscreenchange", e);
});
fs_elm.addEventListener("fullscreenerror", (e) => {
  console.log("Element:fullscreenerror", e);
});
