let newWindow;

document.getElementById("openWindow").addEventListener("click", () => {
    newWindow = window.open("", "", "width=600,height=400");
    newWindow.document.write("<h1>New Window</h1><p>This is a new window.</p>");
    document.getElementById("closeWindow").disabled = false;
    document.getElementById("resizeWindow").disabled = false;
});

document.getElementById("closeWindow").addEventListener("click", () => {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
        document.getElementById("closeWindow").disabled = true;
        document.getElementById("resizeWindow").disabled = true;
    }
});

document.getElementById("resizeWindow").addEventListener("click", () => {
    if (newWindow && !newWindow.closed) {
        newWindow.resizeTo(800, 600);
    }
});