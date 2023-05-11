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
        secondNum: false,
        operatorSequenceFlag: false
    };


// Adds numbers to display.value
function addNumber(number) {
    let displayText = display.value;
    if (displayText === "0" ||
        displayText.match(/^[A-Za-z]*$/) ||
        operationArray.operatorSequenceFlag ||
        operationArray.secondNum) {
        display.value = number;
        operationArray.operatorSequenceFlag = false;
    } else {
        display.value = displayText + number;
    };
};

// Adds operator
function addOperator(symbol) {
    if (operationArray.firstNum &&
        operationArray.operatorSymbol &&
        operationArray.secondNum) {
        equals();
        operationArray.secondNum = false;
    } else if (!operationArray.secondNum) {
        operationArray.firstNum = Number(display.value);
        operationArray.operatorSymbol = symbol;
        operationArray.operatorSequenceFlag = true;
        return;
    };

    // operationArray.firstNum = Number(display.value);
    // operationArray.operatorSymbol = symbol;
    // operationArray.operatorSequenceFlag = true;
}


function clearAll(boolVal) {
    operationArray = {
        firstNum: null,
        operatorSymbol: null,
        operatorSequenceFlag: false
    };
    if (!boolVal) { display.value = '0'; };
};


function equals() {
    if (operationArray.firstNum && display.value) {
        let result = operator(operationArray.operatorSymbol,
            operationArray.firstNum,
            Number(display.value));

        clearAll(true);
        display.value = result;
    };
    return;
};


function addDecimal() {
    if (display.value.includes(".")) { return; }
    display.value += ".";
};


function deleteLast() {
    if (display.value.length > 0) { display.value = display.value.slice(0, -1); };
};