const buttonElement = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const tipAmount = document.getElementById("tipAmount");

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalTipValue = billValue * (tipValue / 100);
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
    tipAmount.innerText = totalTipValue.toFixed(2);

}


buttonElement.addEventListener("click", calculateTotal)
