const parentMsg = document.getElementById("parentMsg");
const sendToChild = document.getElementById("sendToChild");
const fromChild = document.getElementById("fromChild");
const childFrame = document.getElementById("childFrame");

sendToChild.addEventListener("click", () => {
  if (parentMsg.value.trim()) {
    childFrame.contentWindow.postMessage(parentMsg.value, window.location.origin);
  }
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    return; // Ignore messages from untrusted origins
  }
  if (event.source === childFrame.contentWindow) {
    fromChild.textContent = event.data;
  }
});
