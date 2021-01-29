
//First Class Increase
document.getElementById('first-class-increase').addEventListener('click', function () {
    handleFirstClassFlight(true)
})
//first class decrease
document.getElementById('first-class-decrease').addEventListener('click', function () {
    handleFirstClassFlight(false)
})
// Economy class increase
document.getElementById('economy-class-increase').addEventListener('click', function () {
    handleEconomyClassFlight(true);
})
// Economy Class Decrease
document.getElementById('economy-class-decrease').addEventListener('click', function () {
    handleEconomyClassFlight(false);
})

// first class
function handleFirstClassFlight(isIncrease) {
    const firstClassCount = document.getElementById('first-class-count').value;
    const firstClassCountNumber = parseInt(firstClassCount);
    let firstClassNewCount = firstClassCountNumber;
    if (isIncrease == true) {
        firstClassNewCount = firstClassCountNumber + 1;
    }
    if (isIncrease == false && firstClassNewCount > 0) {
        firstClassNewCount = firstClassCountNumber - 1;
    }
    document.getElementById('first-class-count').value = firstClassNewCount;
    totalPrice()
}

//Economy 
function handleEconomyClassFlight(isIncrease) {
    const economyClassCount = document.getElementById('economy-class-count').value;
    const economyClassCountNumber = parseInt(economyClassCount);
    let economyClassNewCountNumber = economyClassCountNumber;
    if (isIncrease == true) {
        economyClassNewCountNumber = economyClassCountNumber + 1
    }
    if (isIncrease == false && economyClassNewCountNumber > 0) {
        economyClassNewCountNumber = economyClassCountNumber - 1;
    }
    document.getElementById('economy-class-count').value = economyClassNewCountNumber;
    totalPrice()
}

function totalPrice() {
    const firstClassCount = document.getElementById('first-class-count').value;
    const firstClassCountNumber = parseInt(firstClassCount);
    const firstClassTotal = firstClassCountNumber * 150;

    const economyClassCount = document.getElementById('economy-class-count').value;
    const economyClassCountNumber = parseInt(economyClassCount);
    const economyClassTotal = economyClassCountNumber * 100;

    const subTotal = firstClassTotal + economyClassTotal;
    document.getElementById('sub-total').innerText = subTotal;

    const tax = (subTotal * 10) / 100;
    document.getElementById('tax').innerText = tax;

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}

// Book Now

document.getElementById('book-now').addEventListener('click', function(){
    totalPrice()
    const confrimationSubtotal=parseFloat(total.innerText) 
    console.log(confrimationSubtotal)
})
