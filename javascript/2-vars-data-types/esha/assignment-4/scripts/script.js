let output = "";

let str = "123";
output += 'String ("123")-<br>';
output += "Number(): " + Number(str) + "<br>";
output += "String(): " + String(str) + "<br>";
output += "Boolean(): " + Boolean(str) + "<br>";
output += "Object(): " + Object(str).toString() + "<br>";
try {
  output += "BigInt(): " + BigInt(str) + "n<br>";
} catch (e) {
  output += "BigInt(): Error<br>";
}
output += "<br>";

let num = 456;
output += "Number (456)-<br>";
output += "Number(): " + Number(num) + "<br>";
output += "String(): " + String(num) + "<br>";
output += "Boolean(): " + Boolean(num) + "<br>";
output += "Object(): " + Object(num).toString() + "<br>";
try {
  output += "BigInt(): " + BigInt(num) + "n<br>";
} catch (e) {
  output += "BigInt(): Error<br>";
}
output += "<br>";

let bool = true;
output += "Boolean (true)-<br>";
output += "Number(): " + Number(bool) + "<br>";
output += "String(): " + String(bool) + "<br>";
output += "Boolean(): " + Boolean(bool) + "<br>";
output += "Object(): " + Object(bool).toString() + "<br>";
try {
  output += "BigInt(): " + BigInt(bool) + "n<br>";
} catch (e) {
  output += "BigInt(): Error<br>";
}
output += "<br>";

let undef;
output += "Undefined-<br>";
output += "Number(): " + Number(undef) + "<br>";
output += "String(): " + String(undef) + "<br>";
output += "Boolean(): " + Boolean(undef) + "<br>";
output += "Object(): " + Object(undef).toString() + "<br>";
try {
  output += "BigInt(): " + BigInt(undef) + "<br>";
} catch (e) {
  output += "BigInt(): Error<br>";
}
output += "<br>";

let n = null;
output += "Null-<br>";
output += "Number(): " + Number(n) + "<br>";
output += "String(): " + String(n) + "<br>";
output += "Boolean(): " + Boolean(n) + "<br>";
output += "Object(): " + Object(n).toString() + "<br>";
try {
  output += "BigInt(): " + BigInt(n) + "<br>";
} catch (e) {
  output += "BigInt(): Error<br>";
}
output += "<br>";

let sym = Symbol("id");
output += "Symbol-<br>";
try {
  output += "String(): " + sym.toString() + "<br>";
} catch (e) {
  output += "String(): Error<br>";
}
output += "Boolean(): " + Boolean(sym) + "<br>";
output += "Object(): " + Object(sym).toString() + "<br>";
try {
  output += "Number(): " + Number(sym) + "<br>";
} catch (e) {
  output += "Number(): Error<br>";
}
try {
  output += "BigInt(): " + BigInt(sym) + "<br>";
} catch (e) {
  output += "BigInt(): Error<br>";
}
output += "<br>";

let obj = { name: "Esha" };
output += "Object ({ name: 'Esha' })-<br>";
output += "String(): " + String(obj) + "<br>";
output += "Boolean(): " + Boolean(obj) + "<br>";
output += "Object(): " + Object(obj).toString() + "<br>";
try {
  output += "Number(): " + Number(obj) + "<br>";
} catch (e) {
  output += "Number(): Error<br>";
}
try {
  output += "BigInt(): " + BigInt(obj) + "<br>";
} catch (e) {
  output += "BigInt(): Error<br>";
}
output += "<br>";

document.getElementById("output").innerHTML = output;
