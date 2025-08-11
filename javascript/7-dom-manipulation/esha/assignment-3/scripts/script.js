const shadowContent = `
            <style>
                .highlight {
                    background-color: yellow;
                }
            </style>
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
                        <p class="group">Bg Color Changes</p>
                        <p class="group">Bg Color Changes</p>
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
        `;

const shadowHost = document.getElementById("shadowHost");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
shadowRoot.innerHTML = shadowContent;

document.getElementById("changeColorBtn").addEventListener("click", () => {
  const pElement1 = shadowRoot.getElementById("para1");
  const pElement2 = shadowRoot.getElementById("para2");
  const colors = ["red", "green", "blue", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (pElement1) pElement1.style.color = randomColor;
  if (pElement2) pElement2.style.color = randomColor;
});

document.getElementById("toggleClassBtn").addEventListener("click", () => {
  const elements = shadowRoot.querySelectorAll(".group");
  for (let element of elements) {
    element.classList.toggle("highlight");
  }
});

document.getElementById("changeTextBtn").addEventListener("click", () => {
  const spans = shadowRoot.querySelectorAll("span");
  for (let span of spans) {
    span.innerHTML = "Updated span text!";
  }
});

document.getElementById("toggleDisabledBtn").addEventListener("click", () => {
  const input = shadowRoot.querySelector("input[name='input1']");
  if (input) {
    input.disabled = !input.disabled;
  }
});

document.getElementById("addCustomAttrBtn").addEventListener("click", () => {
  const pElement = shadowRoot.querySelector("[data-custom]");
  if (pElement) {
    pElement.setAttribute("data-new-attribute", "newValue");
    alert("Custom attribute added!");
  }
});
