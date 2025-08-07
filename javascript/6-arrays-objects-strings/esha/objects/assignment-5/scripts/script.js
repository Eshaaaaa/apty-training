class Person {
  constructor() {
    this.name = "";
    this.age = 0;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  greet() {
    const greeting = `Hello, I am ${this.name}, ${this.age} years old.`;
    return greeting;
  }
}

function createPerson() {
  const name = document.getElementById("nameInput").value.trim();
  const age = parseInt(document.getElementById("ageInput").value);

  const person = new Person().setName(name).setAge(age);
  const greeting = person.greet();

  document.getElementById("result").innerText = greeting;
}
