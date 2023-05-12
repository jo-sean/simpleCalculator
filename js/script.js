// add, subtract, multiple, and divide functionalities for calc
function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    if (b === 0) {
        return "Yucky";
    }
    return a / b;
}


// Controls which operation occurs between any two real numbers
function operator(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Error: Wrong operator";
    }
}


// Global array holding first number input and operation to occur
let display = document.getElementById("display"),
    operationArray = {
        firstNum: null,
        operatorSymbol: null,
        sequenceFlag: false
    };


// Adds numbers to display.value
function addNumber(number) {
    let displayText = display.value;
    if (displayText === "0" || displayText.match(/^[A-Za-z]*$/) || operationArray.sequenceFlag) {
        display.value = number;
        operationArray.sequenceFlag = false;
    } else if (displayText.length < 10) {
        display.value = displayText + number;
    }
};

// Adds operator  symbol and first num, 
// if using two operators back to back, calls equals and sets value to first num
function addOperator(symbol) {
    if (operationArray.firstNum !== null && operationArray.operatorSymbol) { equals(); };
    operationArray.firstNum = Number(display.value);
    operationArray.operatorSymbol = symbol;
    operationArray.sequenceFlag = true;
}

// Reset array to null values and if false, zero out the display.value as well
function clearAll(boolVal) {
    operationArray = {
        firstNum: null,
        operatorSymbol: null,
        sequenceFlag: false
    };
    if (!boolVal) { zeroDisplayValue(); };
};

// Zero out the display.value
function zeroDisplayValue() {
    display.value = '0';
};

// Round numbers to 12 significant figures
function roundNum(num) {
    return Number.parseFloat(num).toPrecision(10);
};

// Call operator, clear array, display results
function equals() {
    if (operationArray.firstNum !== null && display.value) {
        let result = roundNum(operator(operationArray.operatorSymbol,
            operationArray.firstNum,
            Number(display.value))).toString();
        clearAll(true);
        display.value = result;
    };
    return;
};


function addDecimal() {
    if (display.value.includes(".")) { return; }
    else if (operationArray.firstNum && !operationArray.operatorSymbol) {
        zeroDisplayValue();
        operationArray.sequenceFlag = false;
    };
    display.value += ".";
};


function deleteLast() {
    if (display.value.length > 0) { display.value = display.value.slice(0, -1); };
};