// getting the innertext of the display
let display = String(document.getElementById('display').innerText);

// update display value
function updateDisplay(a) {
    document.getElementById('display').innerText = String(a);
}

// number button event listener
document.addEventListener('click', function(e) { // bubble method
    if(e.target.className == 'number') {
        display += e.target.value;
        updateDisplay(display);
    }
});

// clearing the screen on button press
document.getElementById('clear').addEventListener('click', event => {
    display = "";
    updateDisplay(display);
});


let operandBefore = "";
let operator = "";
let operandAfter = "";

// clear all
function clear() {
    operandBefore = "";
    operator = "";
    operandAfter = "";
}

// operator button event listener
document.addEventListener('click', function(e) { // bubble method
    if(e.target.className == 'operator') {
        operandBefore = display;
        operator = e.target.value;
        display = ""; // clear between button presses
        updateDisplay(display);
    }
});

// switch case to perform whatever math operation
function doMath(a, b, op) {
    var solution = "";
    switch(op) {
        case '+':
            solution = String(add(parseInt(a), parseInt(b)));
            break;
    }
    return String(solution);
}

// performing the operation 
document.getElementById('equals').addEventListener('click', function() {
    operandAfter = display;
    var solution = doMath(operandBefore, operandAfter, operator);
    console.log(solution);
    display = solution;
    updateDisplay(display);
});

// operations
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
    return a / b;
}
function modulo(a, b) {
    return a % b;
}

