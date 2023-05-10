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

let displayString = '0';

// Displays value of displayString, 
// cuts off string to max of 15 characters by creating a substring
function displayContent() {
    const display = document.getElementById('display');
    display.innerText = displayString;

    if (displayValue.length > 16) {
        display.innerText = displayString.substring(0, 9);
    }
}

displayContent();

