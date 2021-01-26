var x = document.getElementById('button');
x.addEventListener("click", function () {
    var p = document.getElementById('login-area')
    p.style.display = "none";
    var s = document.getElementById('Transaction-area')
    s.style.display = "block"
})
var deposit = document.getElementById('deposit')
deposit.addEventListener("click", function () {
    var depositAmount = document.getElementById("depositAmount").value;
    var depositNumber = parseFloat(depositAmount);
    var currentDeposit = document.getElementById("currentDeposit").innerText;
    var currentAmount = parseFloat(currentDeposit);
    var totalDeposit = currentAmount + depositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;

    var balance = document.getElementById('currentBalance').innerText;
    var balanceAmount = parseFloat(balance);
    var totalBalance = depositNumber + balanceAmount;
    document.getElementById('currentBalance').innerText = totalBalance;
    //update('currentDeposit',depositNumber)
    //update('currentBalance',depositNumber)
    document.getElementById('depositAmount').value = ""




})
/*function update(id,depositNumber){

    var current =document.getElementById(id).innerText;
var currentAmount = parseFloat(current);
var totalAmount = depositNumber+currentAmount;
document.getElementById(id).innerText = totalAmount;

}
*/
var withdraw = document.getElementById('withdraw');
withdraw.addEventListener("click", function () {
    var withdrawAmount = document.getElementById("withdrawAmount").value;
    var withdrawNumber = parseFloat(withdrawAmount)
    var currentWithdraw = document.getElementById("currentWithdraw").innerText;
    var currentWithdrawNumber = parseFloat(currentWithdraw);
    var totalWithdraw = withdrawNumber + currentWithdrawNumber;
    document.getElementById('currentWithdraw').innerText = totalWithdraw;
    var balance = document.getElementById('currentBalance').innerText;
    var balanceAmount = parseFloat(balance);
    var totalBalance = balanceAmount - withdrawNumber;
    document.getElementById('currentBalance').innerText = totalBalance;
    //update("currentWithdraw",withdrawNumber);
    //update("currentBalance",-1*withdrawNumber)
    document.getElementById('withdrawAmount').value = ""


})
var NanUpdate = document.getElementById('deposit')
NanUpdate.addEventListener("click", function () {
    var read = document.getElementById("currentDeposit").innerText;
    if (isNaN(read)) {
        document.getElementById("currentDeposit").innerText = "00"
        document.getElementById("currentBalance").innerText = "1240"
    }
})
var NanWithdraw = document.getElementById('withdraw')
NanWithdraw.addEventListener("click", function () {
    var read = document.getElementById("currentWithdraw").innerText;
    if (isNaN(read)) {
        document.getElementById("currentWithdraw").innerText = "00"
        document.getElementById("currentBalance").innerText = "1240"
    }
})