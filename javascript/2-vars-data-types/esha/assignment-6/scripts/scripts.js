let str = "Esha";
let num = 22;
let bool = true;
let undef;
let n = null;
let sym = Symbol("id");
let obj = { name: "Esha", city: "Hyderabad" };

let output = "";

output += `<p>String: I'm ${str}</p>`;
output += `<p>Number: My age is ${num}</p>`;
output += `<p>Boolean: Student status is ${bool}</p>`;
output += `<p>Null: Value is ${n}</p>`;
output += `<p>Undefined: Data is ${undef}</p>`;
output += `<p>Symbol: Symbol is ${sym.toString()}</p>`;
output += `<p>Object: My name is ${obj.name} and city is ${obj.city}</p>`;

document.getElementById("output").innerHTML = output;
