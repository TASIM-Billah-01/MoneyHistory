document.getElementById("login-btn"). 
addEventListener("click", function(event) {
    event.preventDefault();
    const userEnter = addMoney("add-money");
    const usertTotal = addBalance("balance");
    let addMoneyPin = document.getElementById("add-money-pin").value;
    addMoneyPin = parseFloat(addMoneyPin);

    if(userEnter < 0) {
        alert("You can't enter negative value");
        return;
    }
    if (typeof userEnter !== "string") {
        alert("You can't enter string values");
        return;
    }
    
    if(addMoneyPin === 1234) {
        const totalBalance = userEnter + usertTotal;
        document.getElementById("balance").innerText = totalBalance; 
        
       const p =  document.createElement("p");
       p.innerText = `Money added ${userEnter} before adding ${usertTotal} after adding ${totalBalance}`;

       document.getElementById("end").appendChild(p);

    } else {
        console.log("your pin is incorrect . try again");
    }
})