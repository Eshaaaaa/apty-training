let str = "9";
let num = 7;
let bool = true;
let undef;
let n = null;
let sym = Symbol("id");
let obj = { name: "Esha" };

let output = "";

function safeAdd(a, b) {
  try {
    return a + b;
  } catch {
    return "Error";
  }
}

let objStr = String(obj);

output += `<p>string + string = ${safeAdd(str, str)}</p>`;
output += `<p>string + number = ${safeAdd(str, num)}</p>`;
output += `<p>string + boolean = ${safeAdd(str, bool)}</p>`;
output += `<p>string + undefined = ${safeAdd(str, undef)}</p>`;
output += `<p>string + null = ${safeAdd(str, n)}</p>`;
output += `<p>string + symbol = ${safeAdd(str, sym)}</p>`;
output += `<p>string + object = ${safeAdd(str, objStr)}</p><br>`;

output += `<p>number + string = ${safeAdd(num, str)}</p>`;
output += `<p>number + number = ${safeAdd(num, num)}</p>`;
output += `<p>number + boolean = ${safeAdd(num, bool)}</p>`;
output += `<p>number + undefined = ${safeAdd(num, undef)}</p>`;
output += `<p>number + null = ${safeAdd(num, n)}</p>`;
output += `<p>number + symbol = ${safeAdd(num, sym)}</p>`;
output += `<p>number + object = ${safeAdd(num, objStr)}</p><br>`;

output += `<p>boolean + string = ${safeAdd(bool, str)}</p>`;
output += `<p>boolean + number = ${safeAdd(bool, num)}</p>`;
output += `<p>boolean + boolean = ${safeAdd(bool, bool)}</p>`;
output += `<p>boolean + undefined = ${safeAdd(bool, undef)}</p>`;
output += `<p>boolean + null = ${safeAdd(bool, n)}</p>`;
output += `<p>boolean + symbol = ${safeAdd(bool, sym)}</p>`;
output += `<p>boolean + object = ${safeAdd(bool, objStr)}</p><br>`;

output += `<p>undefined + string = ${safeAdd(undef, str)}</p>`;
output += `<p>undefined + number = ${safeAdd(undef, num)}</p>`;
output += `<p>undefined + boolean = ${safeAdd(undef, bool)}</p>`;
output += `<p>undefined + undefined = ${safeAdd(undef, undef)}</p>`;
output += `<p>undefined + null = ${safeAdd(undef, n)}</p>`;
output += `<p>undefined + symbol = ${safeAdd(undef, sym)}</p>`;
output += `<p>undefined + object = ${safeAdd(undef, objStr)}</p><br>`;

output += `<p>null + string = ${safeAdd(n, str)}</p>`;
output += `<p>null + number = ${safeAdd(n, num)}</p>`;
output += `<p>null + boolean = ${safeAdd(n, bool)}</p>`;
output += `<p>null + undefined = ${safeAdd(n, undef)}</p>`;
output += `<p>null + null = ${safeAdd(n, n)}</p>`;
output += `<p>null + symbol = ${safeAdd(n, sym)}</p>`;
output += `<p>null + object = ${safeAdd(n, objStr)}</p><br>`;

output += `<p>symbol + string = ${safeAdd(sym, str)}</p>`;
output += `<p>symbol + number = ${safeAdd(sym, num)}</p>`;
output += `<p>symbol + boolean = ${safeAdd(sym, bool)}</p>`;
output += `<p>symbol + undefined = ${safeAdd(sym, undef)}</p>`;
output += `<p>symbol + null = ${safeAdd(sym, n)}</p>`;
output += `<p>symbol + symbol = ${safeAdd(sym, sym)}</p>`;
output += `<p>symbol + object = ${safeAdd(sym, objStr)}</p><br>`;

output += `<p>object + string = ${safeAdd(objStr, str)}</p>`;
output += `<p>object + number = ${safeAdd(objStr, num)}</p>`;
output += `<p>object + boolean = ${safeAdd(objStr, bool)}</p>`;
output += `<p>object + undefined = ${safeAdd(objStr, undef)}</p>`;
output += `<p>object + null = ${safeAdd(objStr, n)}</p>`;
output += `<p>object + symbol = ${safeAdd(objStr, sym)}</p>`;
output += `<p>object + object = ${safeAdd(objStr, objStr)}</p><br>`;

document.getElementById("output").innerHTML = output;
