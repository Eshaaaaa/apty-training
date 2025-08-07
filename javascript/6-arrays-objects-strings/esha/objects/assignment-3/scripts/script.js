const person = {
  name: "Default",
  introduce: function () {
    return `Hi, I'm ${this.name}.`;
  },
};

function createEmployee() {
  const name = document.getElementById("nameInput").value.trim();
  const job = document.getElementById("jobInput").value.trim();

  const employee = Object.create(person);

  employee.name = name;
  employee.job = job;

  employee.work = function () {
    return `I'm working as a ${this.job}.`;
  };

  const output = `${employee.introduce()}\n${employee.work()}`;
  document.getElementById("result").innerText = output;
}
