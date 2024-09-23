document.getElementById("csh-out-btn"). 
addEventListener("click", function(params) {
    params.preventDefault();
    const cashOut = addMoney("cash-out");
    const totalBalance = addBalance("balance");
    let cashOutPin = document.getElementById("cash-out-pin").value;
    cashOutPin  = parseFloat(cashOutPin);

    if( cashOut > totalBalance) {
        alert("you dont have sufficient balance")
        return;
    }

    if (typeof cashOut !== "string") {
        alert("You can't enter string values");
        return;
    }

        if(cashOutPin === 1234) {
            const amountLeft = totalBalance - cashOut;
            document.getElementById("balance").innerText = amountLeft;

       const h1 =  document.createElement("h1");
       h1.innerText = `Cash out ${cashOut} before Cash out ${totalBalance} after Cash out ${amountLeft}`;
       console.log(h1);

       document.getElementById("end").appendChild(h1);
        } else {
            alert("your pin is incorrect . try again");
        }


})