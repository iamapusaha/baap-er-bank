document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFiled = document.getElementById('deposit-field')
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    const depositTotalElement = document.getElementById('deposit-total')
    const preDepositTotalString = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString);



    const currentDepositTotal = preDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    const blanceTotalElemment = document.getElementById('blance-total')
    const blanceTotalElemmentString = blanceTotalElemment.innerText;
    const preBlanceTotal = parseFloat(blanceTotalElemmentString)

    const currentBlanceTotal = preBlanceTotal + newDepositAmount;
    blanceTotalElemment.innerText = currentBlanceTotal;


    depositFiled.value = '';
})