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
    if (displayText === "0" || displayText.match(/^[A-Za-z]*$/) || 
        operationArray.sequenceFlag) {
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
    let rounded = Number.parseFloat(num).toPrecision(10);
    if (Number.isInteger(Number(rounded))) {
        return Number(rounded).toFixed(0);
    } else {
        return Number(rounded).toString();
    }
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

function handleKeyPress(event) {
    const keyCode = event.keyCode;
    event.preventDefault();
    if (keyCode === 97) { // 97 is the key code for the "1" key
      addNumber("1"); // Call a function to update the calculator's display with "1"
    }
    if (keyCode === 98) { // 98 is the key code for the "2" key
        addNumber("2"); // Call a function to update the calculator's display with "2"
      }
      if (keyCode === 99) { // 99 is the key code for the "3" key
        addNumber("3"); // Call a function to update the calculator's display with "3"
      }
      if (keyCode === 100) { // 100 is the key code for the "4" key
        addNumber("4"); // Call a function to update the calculator's display with "4"
      }
      if (keyCode === 101) { // 101 is the key code for the "5" key
        addNumber("5"); // Call a function to update the calculator's display with "5"
      }
      if (keyCode === 102) { // 102 is the key code for the "6" key
        addNumber("6"); // Call a function to update the calculator's display with "6"
      }
      if (keyCode === 103) { // 103 is the key code for the "7" key
        addNumber("7"); // Call a function to update the calculator's display with "7"
      }
      if (keyCode === 104) { // 104 is the key code for the "8" key
        addNumber("8"); // Call a function to update the calculator's display with "8"
      }
      if (keyCode === 105) { // 105 is the key code for the "9" key
        addNumber("9"); // Call a function to update the calculator's display with "9"
      }
      if (keyCode === 96) { // 96 is the key code for the "0" key
        addNumber("0"); // Call a function to update the calculator's display with "0"
      }
      if (keyCode === 110) { // 110 is the key code for the "." key
        addDecimal(); // Call a function to update the calculator's display with "."
      }
      if (keyCode === 8) { // 8 is the key code for the "<" key
        deleteLast(); // Call a function to update the calculator's display with "."
      }
}

document.addEventListener("keydown", handleKeyPress);