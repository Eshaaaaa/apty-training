function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function merge(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (isObject(obj1[key]) && isObject(obj2[key])) {
        obj1[key] = merge(obj1[key], obj2[key]); 
      } else {
        obj1[key] = obj2[key]; 
      }
    }
  }
  return obj1;
}

function mergeObjects() {
  try {
    const obj1Input = document.getElementById("obj1Input").value.trim();
    const obj2Input = document.getElementById("obj2Input").value.trim();

    const obj1 = JSON.parse(obj1Input);
    const obj2 = JSON.parse(obj2Input);

    const mergedObj = merge(obj1, obj2);

    document.getElementById("result").textContent = JSON.stringify(mergedObj, null, 2);
  } catch (error) {
    document.getElementById("result").textContent = "Invalid JSON input!\n\n" + error.message;
  }
}
let config1 = {
  theme: "dark",
  user: {
    name: "Alice",
    id: 123
  },
  settings: {
    notifications: true,
    language: "en"
  }
};

let config2 = {
  theme: "light",
  user: {
    id: 456,
    email: "alice@example.com"
  },
  settings: {
    notifications: false
  },
  appVersion: "1.2.0"
};