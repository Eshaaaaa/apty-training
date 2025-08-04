function createBankAccount() {
  let balance = 0;

  return {
    deposit: function () {
      const amt = Number(document.getElementById("amount").value);
      if (amt > 0) {
        balance += amt;
        display(`Deposited: $${amt}`);
      } else {
        display("Enter a valid amount to deposit.");
      }
    },
    withdraw: function () {
      const amt = Number(document.getElementById("amount").value);
      if (amt > 0 && amt <= balance) {
        balance -= amt;
        display(`Withdrew: $${amt}`);
      } else {
        display("Invalid or insufficient funds.");
      }
    },
    checkBalance: function () {
      display(`Current Balance: $${balance}`);
    },
  };
}

function display(msg) {
  document.getElementById("output").innerText = msg;
}

const account = createBankAccount();
