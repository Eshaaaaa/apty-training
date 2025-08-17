window.onmessage = function (event) {
    document.getElementById("parentMsg").textContent = event.data;
};

function sendToParent() {
    let msg = document.getElementById("msgToParent").value;
    parent.postMessage("Child to Parent: " + msg, "*");
}

function sendToTop() {
    let msg = document.getElementById("msgToParent").value;
    top.postMessage("Child to TOP window: " + msg, "*");
}