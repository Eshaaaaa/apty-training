function sendToChild() {
    let msg = document.getElementById("msgToChild").value;
    document.getElementById("childFrame").contentWindow.postMessage(msg, window.location.origin);
}

window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin) {
        return; // Security: only accept messages from same origin.
    }
    document.getElementById("childMsg").textContent = event.data;
});