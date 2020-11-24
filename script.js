class Number {
    constructor(price, conversion, sum) {
        this.price = price;
        this.conversion = conversion;
        this.sum = sum;
    }
}

var currencyRates = {
    "USD": 1.18,
    "EUR": 1,
    "JPY": 123.44,
    "RUB": 90.32,
    "SEK": 10.22
};

//Function that converts selected currency amount
function convertCurrency(currentCurrency, desiredCurrency, amount) {
    console.log(currentCurrency, desiredCurrency);

    if (currentCurrency == 'EUR')
        return currencyRates[desiredCurrency] * amount;

    const inEur = (1 / currencyRates[currentCurrency]) * amount;
    return inEur * currencyRates[desiredCurrency];
}



const UI = {
    amountInput: document.querySelector("#price"),
    convertFromSelect: document.querySelector("#convert-from"),
    convertToSelect: document.querySelector("#convert-to"),
    amountConverted: document.querySelector("#sum")
};

function onInputChanged() {
    //function converts value of amount
    const input = UI.amountInput.value;

    if (input == '')
        return;

    const currencyFrom = UI.convertFromSelect.value;
    const currencyTo = UI.convertToSelect.value;

    const value = convertCurrency(currencyFrom, currencyTo, parseFloat(input));

    //Amount converted
    UI.amountConverted.value = value;

}

function onAmountChanged() {
    const amount = UI.amountConverted.value;

    if (amount == '')
        return;

    const amountForm = UI.convertToSelect.value;
    const amountTo = UI.convertFromSelect.value;

    const convertedValue = convertCurrency(amountForm, amountTo, parseFloat(amount));

    UI.amountInput.value = convertedValue;
}

UI.amountInput.addEventListener('keyup', onInputChanged);
UI.convertFromSelect.addEventListener('change', onInputChanged);
UI.convertToSelect.addEventListener('change', onInputChanged);

UI.amountConverted.addEventListener('keyup', onAmountChanged);
UI.convertFromSelect.addEventListener('change', onAmountChanged);
UI.convertToSelect.addEventListener('change', onAmountChanged);