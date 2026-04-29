const billInput = document.querySelector('#bill')
const tip = document.querySelector('#tip-select'); 
const ppl = document.querySelector('#people-amount');
const customTip = document.querySelector('#custom-tip');
const customTipLabel = document.querySelector('#custom-tip-label');
const result = document.querySelector('#results')
const tipPerPerson = document.querySelector('#tip-per-person');
const totalPerPerson = document.querySelector('#total-per-person');
const grandTotal = document.querySelector('#grand-total');
const errorMessage = document.querySelector('#error-message')

function tipCalc() {

    const billvalue = parseFloat(billInput.value);
    const tipValue = parseInt(tip.value);
    const pplValue = parseInt(ppl.value);
    const customTipValue = parseInt(customTip.value);

    if (isNaN(billvalue) || isNaN(pplValue)) {
        errorMessage.textContent = 'Error, Only Numbers are allowed';
        errorMessage.style.display = 'block';
        result.style.display = 'none';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    if (billvalue < 0) {
        errorMessage.textContent = 'Error, Negative Numbers are not allowed';
        errorMessage.style.display = 'block';
        result.style.display = 'none';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    if (pplValue === 0) {
        errorMessage.textContent = 'Number of People Cannot be Zero';
        errorMessage.style.display = 'block';
        result.style.display = 'none';
        return;
    }

    if (pplValue < 0) {
        errorMessage.textContent = 'Number of People Cannot be Negative';
        errorMessage.style.display = 'block';
        result.style.display = 'none';
        return;
    }
    
    if (isNaN(billvalue) === false && isNaN(tipValue) === false && isNaN(pplValue) === false){
        let billPer = ((billvalue * (tipValue / 100)) + billvalue) / pplValue;
        let tipPer = (billvalue * (tipValue / 100) / pplValue);
        let totalBill = (billvalue * (tipValue / 100) + billvalue);

        tipPerPerson.textContent = tipPer.toFixed(2);
        totalPerPerson.textContent = billPer.toFixed(2);
        grandTotal.textContent = totalBill.toFixed(2);

        result.style.display = 'block';

    } else if (isNaN(customTipValue) === false && isNaN(tipValue) === true){
        let billPer = ((billvalue * (customTipValue / 100)) + billvalue) / pplValue;
        let tipPer = (billvalue * (customTipValue / 100) / pplValue);
        let totalBill = (billvalue * (customTipValue / 100) + billvalue);

        tipPerPerson.textContent = tipPer.toFixed(2);
        totalPerPerson.textContent = billPer.toFixed(2);
        grandTotal.textContent = totalBill.toFixed(2);

        result.style.display = 'block';

    }
}

function isCustom(){
    const customValue = tip.value;
    const customTipValue = parseInt(customTip.value);

    if (customValue === "custom"){
        customTip.style.display = 'block';
        customTipLabel.style.display = 'block';
    } else{
        customTip.style.display = 'none';
        customTipLabel.style.display = 'none';
    }
}

function reset() {

    result.style.opacity = '0';
    setTimeout(() => {
        billInput.value = '';
        tip.value = '';
        ppl.value = '';
        customTip.value = '';
        customTip.style.display = 'none';
        customTipLabel.style.display = 'none';
        errorMessage.style.display = 'none';
        result.style.display = 'none';
        result.style.opacity = '1';
    }, 300);

}

document.querySelector('#bill').addEventListener('input', tipCalc);
document.querySelector('#people-amount').addEventListener('input', tipCalc);
document.querySelector('#tip-select').addEventListener('input', tipCalc);
document.querySelector('#tip-select').addEventListener('input', isCustom);
document.querySelector('#custom-tip').addEventListener('input', tipCalc);
document.querySelector('#resetBtn').addEventListener('click', reset)