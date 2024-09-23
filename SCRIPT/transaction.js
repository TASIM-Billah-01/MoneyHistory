document.getElementById("add-money-btn"). 
addEventListener("click", function(event) {
    event.preventDefault();
    shadow("start");
})
document.getElementById("cash-out-btn"). 
addEventListener("click", function(event) {
    event.preventDefault();
    shadow("middle");
})
document.getElementById("transaction-btn"). 
addEventListener("click", function(event) {
    event.preventDefault();
    shadow("end");
})
