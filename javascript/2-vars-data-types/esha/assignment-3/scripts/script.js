let output = "";

let str = "Hello, Esha!";
output += `Value: ${str} <br>typeof = ${typeof str}<br><br>`;

let num = 42.5;
output += `Value: ${num} <br>typeof = ${typeof num}<br><br>`;

let bool = true;
output += `Value: ${bool} <br>typeof = ${typeof bool}<br><br>`;

let undef;
output += `Value: ${undef} <br>typeof = ${typeof undef}<br><br>`;

let nul = null;
output += `Value: ${nul} <br>typeof = ${typeof nul} (bug)<br><br>`;

let sym = Symbol("id");
output += `Value: ${sym.toString()} <br>typeof = ${typeof sym}<br><br>`;

let big = 1234567890123456789012345678901234567890n;
output += `Value: ${big} <br>typeof = ${typeof big}<br><br>`;

let obj = { name: "Esha" };
output += `Value: { name: ${obj.name} } <br>typeof = ${typeof obj}<br><br>`;

document.getElementById("output").innerHTML = output;
