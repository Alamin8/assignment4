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

// First Class Flight Input Counter by plus - minus Button
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

//Economy Flight Input Counter by plus - minus Button
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

// This function create for Calculate Total Amount. 
function totalPrice() {
    const firstClassCount = document.getElementById('first-class-count').value;
    const firstClassCountNumber = parseInt(firstClassCount);
    const firstClassTotal = firstClassCountNumber * 150;

    const economyClassCount = document.getElementById('economy-class-count').value;
    const economyClassCountNumber = parseInt(economyClassCount);
    const economyClassTotal = economyClassCountNumber * 100;

    const subTotal = firstClassTotal + economyClassTotal;
    document.getElementById('sub-total').innerText = subTotal;

    const vat = (subTotal * 10) / 100;
    document.getElementById('vat').innerText = vat;

    const total = subTotal + vat;
    document.getElementById('total').innerText = total;
}

// work this code to remove a section and open confrimation section
document.getElementById('book-now').addEventListener('click', function () {
    const confrimationMassage = document.getElementById('confrimation-massage');
    const afterConfrimationNavbar = document.getElementById('after-cofrimation-navbar');
    const afterConfrimationForm = document.getElementById('after-confrimation-form');

    confrimationMassage.style.display = 'block';
    afterConfrimationNavbar.style.display = 'none';
    afterConfrimationForm.style.display = 'none';
    userinput()
})

// This function create for user input to show Confrimation Windows.
function userinput() {
    totalPrice()
    const flyingFrom = document.getElementById('flying-from').value;
    document.getElementById('Confrim-flying-from').innerText = flyingFrom;
    const flyingTo = document.getElementById('flying-to').value;
    document.getElementById('Confrim-flying-to').innerText = flyingTo;
    const departure = document.getElementById('departure').value;
    document.getElementById('confrim-departure').innerText = departure;
    const back = document.getElementById('back').value;
    document.getElementById('confrim-back').innerText = back;
    const firstClassSeat = parseInt(document.getElementById('first-class-count').value);
    const economyClassSeat = parseInt(document.getElementById('economy-class-count').value);
    const totalSeat = firstClassSeat + economyClassSeat;
    document.getElementById('confrim-seat').innerText = totalSeat;
    const confrimationTotal = parseFloat(total.innerText)
    document.getElementById('confrim-total').innerText = confrimationTotal;
}