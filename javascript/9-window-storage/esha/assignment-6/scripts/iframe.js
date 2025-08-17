const iframeMsg = document.getElementById("iframeMsg");
const sendToParent = document.getElementById("sendToParent");
const fromParent = document.getElementById("fromParent");

sendToParent.addEventListener("click", () => {
  if (iframeMsg.value.trim()) {
    window.parent.postMessage(iframeMsg.value, window.location.origin);
  }
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
      return; // Ignore messages from untrusted origins
  }
  if (event.source === window.parent) {
    fromParent.textContent = event.data;
  }
});
