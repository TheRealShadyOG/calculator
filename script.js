// Add function

function add(a, b) {
    return a + b;
}

// Subtract function
function subtract(a, b) {
    return a - b;
}

// Multiply function
function multiply(a, b) {
    return a * b;
}

// Divide function
function divide(a, b) {
    return a / b;
}

// Make variables for operations
let firstNum;
let operator;
let secondNum;

// Create operate function
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

let displayValue = 0;
document.getElementById("display").textContent = displayValue;
// Create function that populate the display when buttons are clicked
function display(num) {
    if (displayValue === 0) {
        displayValue = num;
    } else {
        displayValue += num;
    }
    document.getElementById("display").textContent = displayValue;
}

// Store the first and second inputs
    function storeNum() {
        if (firstNum === undefined) {
            firstNum = displayValue;
            displayValue = 0;
        } else if (secondNum === undefined) {
            secondNum = displayValue;
            displayValue = 0;
        } 
    }
