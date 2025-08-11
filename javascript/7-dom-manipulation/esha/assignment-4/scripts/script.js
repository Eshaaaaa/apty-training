const output = document.getElementById("elementCountDisplay");
const count = document.getElementById("countElementsBtn");
 
count.addEventListener("click", function () {
    let tags = ["div", "p", "span", "iframe"];
 
    tags.forEach(tag => {
        let count = document.getElementsByTagName(tag).length;
        output.innerHTML += `<li>${tag}: ${count}</li>`;
    });
});