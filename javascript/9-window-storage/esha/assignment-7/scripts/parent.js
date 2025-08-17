function sendToChild() {
    let msg = document.getElementById("msgToChild").value;
    document.getElementById("childFrame").contentWindow.postMessage(msg, window.location.origin);
}

window.onmessage = function (event) {
    document.getElementById("childMsg").textContent = event.data;
};