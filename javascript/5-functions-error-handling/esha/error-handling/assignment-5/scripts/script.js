function withdrawAmount(balance, amount) {
  if (amount > balance) {
    const error = new Error("Insufficient funds. Please enter a lower amount.");
    error.errorCode = 101;
    throw error;
  }
  return balance - amount;
}

function processWithdrawal() {
  const balanceEl = document.getElementById("accountBalance");
  const amountEl = document.getElementById("amountInput");
  const messageEl = document.getElementById("statusMsg");

  const currentBalance = parseFloat(balanceEl.innerText);
  const withdrawal = parseFloat(amountEl.value.trim());

  messageEl.textContent = "";

  if (isNaN(withdrawal) || withdrawal <= 0) {
    messageEl.textContent = "❌ Invalid input. Please enter a valid number.";
    return;
  }

  try {
    const updatedBalance = withdrawAmount(currentBalance, withdrawal);
    balanceEl.textContent = updatedBalance;
    messageEl.textContent = `✅ Withdrawal successful. New Balance: ₹${updatedBalance}`;
  } catch (err) {
    messageEl.textContent = `❌ Error Code: ${err.errorCode} — ${err.errorMessage}`;
  }
}
