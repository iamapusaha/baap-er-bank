document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(withdrawTotalString);



    const blanceTotalElemment = document.getElementById('blance-total')
    const blanceTotalElemmentString = blanceTotalElemment.innerText;
    const preBlanceTotal = parseFloat(blanceTotalElemmentString);
    withdrawField.value = '';

    if (newWithdrawAmount > preBlanceTotal) {
        alert('bap er bank ato tk poisha nai vai');
        return;
    }
    const currnetWithdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currnetWithdrawTotal;


    const currentBlanceTotal = preBlanceTotal - newWithdrawAmount;

    blanceTotalElemment.innerText = currentBlanceTotal;




})