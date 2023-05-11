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
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

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

let operationArray = {
    firstNum: null,
    operatorSymbol: null,
    secondNum: null
};

function addNumber(number) {
    let display = document.getElementById("display");
    let displayText = display.value;
    if (displayText == "0" || displayText == ".") {
        display.value = number;
    } else {
        display.value = displayText + number;
    }
}
