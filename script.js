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
        displayValue = add(a, b);
    } else if (operator === "-") {
        displayValue = subtract(a, b);
    } else if (operator === "*") {
        displayValue = multiply(a, b);
    } else if (operator === "/") {
        displayValue = divide(a, b);
    }
    document.getElementById("display").textContent = displayValue;
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
        firstNum = Number(displayValue);
        displayValue = 0;
    } else if (secondNum === undefined) {
        secondNum = Number(displayValue);
        displayValue = 0;
    } 
}

// Utilize selected operator
function updateOperator(selecetedOp) {
    if (operator === undefined) {
        operator = selecetedOp;
        storeNum();
    } else {
        calculate();
    }
}

// Run operation
function calculate() {
    storeNum();
    operate(operator, firstNum, secondNum);
}

// Clear button 
function reset() {
    displayValue = 0;
    document.getElementById("display").textContent = displayValue;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
}