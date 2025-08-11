const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Iframe Content</title>
        <style>
          .highlight {
            background-color: yellow;
          }
        </style>
      </head>
      <body>
        <table border="1" style="width: 100%; text-align: center">
          <tr>
            <th>id</th>
            <th>className</th>
            <th>tag</th>
            <th>name</th>
            <th>attribute</th>
          </tr>
          <tr>
            <td>
              <p id="para1">Hello!</p>
              <p id="para2">World!</p>
            </td>
            <td>
              <p class="group">Background Color Changes</p>
              <p class="group">Background Color Changes</p>
            </td>
            <td>
              <span>Initial Text 1</span>
              <br />
              <span>Initial Text 2</span>
            </td>
            <td>
              <input type="text" name="input1" value="First Name" />
              <input type="text" name="input2" value="Last Name" />
            </td>
            <td>
              <p data-custom="value1">Custom Attribute 1</p>
              <p data-custom="value2">Custom Attribute 2</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

const iframe = document.getElementById("contentIframe");
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframeDoc.open();
iframeDoc.write(htmlContent);
iframeDoc.close();

document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    const pElement1 = iframeDoc.getElementById("para1");
    const pElement2 = iframeDoc.getElementById("para2");
    const colors = ["red", "green", "blue", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    pElement1.style.color = randomColor;
    pElement2.style.color = randomColor;
  });

document
  .getElementById("toggleBackgroundBtn")
  .addEventListener("click", function () {
    const elements = iframeDoc.getElementsByClassName("group");
    for (let element of elements) {
      element.classList.toggle("highlight");
    }
  });

document.getElementById("updateTextBtn").addEventListener("click", function () {
  const spanElements = iframeDoc.getElementsByTagName("span");
  for (let span of spanElements) {
    span.innerHTML = "Updated span text!";
  }
});

document
  .getElementById("toggleDisabledBtn")
  .addEventListener("click", function () {
    const inputs = iframeDoc.getElementsByName("input1");
    for (let input of inputs) {
      input.disabled = !input.disabled;
    }
  });

document
  .getElementById("addAttributeBtn")
  .addEventListener("click", function () {
    const pElement = iframeDoc.querySelector("[data-custom]");
    pElement.setAttribute("data-new-attribute", "newValue");
    alert("Custom attribute added!");
  });
