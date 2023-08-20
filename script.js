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
        if (b === 0) {
            document.getElementById("display").textContent = "Error";
            return
        }
        displayValue = divide(a, b);   
    }
    displayValue = +displayValue.toFixed(3);
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
        if (firstNum === undefined) {
            storeNum();
        }
    } else {
        calculate();
        operator = selecetedOp;
    }
}

// Run operation
function calculate() {
    if (displayValue !== 0 && operator !== undefined) {
        storeNum();
        operate(operator, firstNum, secondNum);
        firstNum = displayValue;
        displayValue = 0;
        secondNum = undefined;
        operator = undefined;
    }
}

// Clear button 
function reset() {
    displayValue = 0;
    document.getElementById("display").textContent = displayValue;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
}

// Decimal button
function decimal() {
    if (displayValue.includes('.') === false) {
        display(".");
    }
}

// Back button
function undo() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").textContent = displayValue;
}

// Add keyboard support
document.addEventListener('keypress', keyInput)

// Add function keyInput
function keyInput(event) {
    // Numbers
    if (event.key === '0') {
        display('0');
    } else if (event.key === '1') {
        display('1');
    } else if (event.key === '2') {
        display('2');
    } else if (event.key === '3') {
        display('3');
    } else if (event.key === '4') {
        display('4');
    } else if (event.key === '5') {
        display('5');
    } else if (event.key === '6') {
        display('6');
    } else if (event.key === '7') {
        display('7');
    } else if (event.key === '8') {
        display('8');
    } else if (event.key === '9') {
        display('9');
    // Decimal 
    } else if (event.key === '.') {
        decimal();
    // Operators
    } else if (event.key === '+') {
        updateOperator('+');
    } else if (event.key === '-') {
        updateOperator('-');
    } else if (event.key === '*') {
        updateOperator('*');
    } else if (event.key === '/') {
        updateOperator('/');
    // Run equation
    } else if (event.key === '=' || event.key === 'Enter') {
        calculate();
    // Clear 
    } else if (event.key === 'c' || event.key === 'C') {
        reset();
    // Undo 
    } else if (event.key === 'Delete') {
        undo();
    }
}

// Keydown for backspace 
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        undo();
    }
})