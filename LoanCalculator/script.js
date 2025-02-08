document.getElementById('calculateBtn').addEventListener('click',calculateLoan);
function calculateLoan(){
    const principleAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRateInput').value);
    const loanTermInMonths = parseFloat(document.getElementById('loanTermInputInMonths').value);
    const loanTermInYears = parseFloat(document.getElementById('loanTermInputInYears').value);


    if(isNaN(principleAmount) || isNaN(annualInterestRate) || isNaN(loanTermInMonths) &&  isNaN(loanTermInYears)){
        alert('Please enter valid values');
    }

      //monthly Calculations
    const monthlyInterestRate = annualInterestRate/100/12;
    const totalPayments = loanTermInMonths || loanTermInYears * 12;
    const EMI = (principleAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    const totalInterestForMonths = (EMI * totalPayments) - principleAmount;
    const finalAmountForMonths = EMI * totalPayments;

    //Annual Calculations
    const totalInterestForYears =  finalAmountForMonths - principleAmount;
    const finalAmountForYears = principleAmount + totalInterestForYears;


    displayResultsForMonths(EMI,totalPayments,principleAmount,totalInterestForMonths,finalAmountForMonths);
    displayResultsForYears(EMI,totalPayments,principleAmount,totalInterestForYears,finalAmountForYears);

}
function displayResultsForMonths(a,b,c,d,e) {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
         <p><strong>EMI.: ${a.toFixed(2)}</p></strong>
         <p><strong>Total EMI'S.: ${b}</p></strong>
         <p><strong>Principle Amount.: ${c}</p></strong>
         <p><strong>Total Interest.: ${d.toFixed(2)}</p></strong>
         <p><strong>Final Amount.: ${e.toFixed(2)}</p></strong>
         `;
}

function displayResultsForYears(a,b,c,d,e) {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
         <p><strong>EMI.: ${a.toFixed(2)}</p></strong>
         <p><strong>Total EMI'S.: ${b}</p></strong>
         <p><strong>Principle Amount.: ${c}</p></strong>
         <p><strong>Total Interest.: ${d.toFixed(2)}</p></strong>
         <p><strong>Final Amount.: ${e.toFixed(2)}</p></strong>
         `;
}