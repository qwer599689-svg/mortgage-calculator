// JavaScript for mortgage calculation and animationfunction calculateMortgage() {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    document.getElementById('monthlyPayment').innerText = 'Please fill in all fields correctly.';
    return;
  }

  const monthlyPayment = loanAmount * interestRate / (1 - Math.pow(1 + interestRate, -loanTerm));
  document.getElementById('monthlyPayment').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
