let output = "";

var x = 10;
let y = 20;
const z = 30;

output += `Initial values:<br>x = ${x}<br>y = ${y}<br>z = ${z}<br><br>`;

try {
  var x = 100;
  output += `Re-declared x = ${x}<br>`;
} catch (e) {
  output += `x re-declare error: ${e}<br>`;
}

{
  let y = 200;
  const z = 300;
  output += `Re-declared y = ${y} (✅ in new block scope)<br>`;
  output += `Re-declared z = ${z} (✅ in new block scope)<br>`;
}

output += `<br>`;

try {
  x = 500;
  output += `Re-assigned x = ${x}<br>`;
} catch (e) {
  output += `x re-assign error: ${e}<br>`;
}

try {
  y = 600;
  output += `Re-assigned y = ${y}<br>`;
} catch (e) {
  output += `y re-assign error: ${e}<br>`;
}

try {
  z = 700;
  output += `Re-assigned z = ${z}<br>`;
} catch (e) {
  output += `Re-assigned z error: ${e}<br>`;
}

document.getElementById("output").innerHTML = output;
