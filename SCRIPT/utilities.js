function addMoney(id) {
    let amount = document.getElementById(id).value;
        amount = parseFloat(amount);
        return amount;
}

function addBalance(params) {
    let balance = document.getElementById(params).innerText;
    balance = parseFloat(balance);
    return balance;
}

function shadow(params) {
    document.getElementById("start").classList.add("hidden");
    document.getElementById("middle").classList.add("hidden");
    document.getElementById("end").classList.add("hidden");

    document.getElementById(params).classList.remove("hidden");
}