// getting the innertext of the display
let display = String(document.getElementById('display').innerText);

// update display value
function updateDisplay(a) {
    document.getElementById('display').innerText = String(a);
}

// number button event listener
document.addEventListener('click', function(e) { // bubble method
    if(e.target.className == 'number') {
        if(display.length < 14) { // limit to 14 digits
        display += e.target.value;
        updateDisplay(display);
        }
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
            solution = add(parseFloat(a), parseFloat(b));
            break;
        case '-':
            solution = subtract(parseFloat(a), parseFloat(b));
            break;
        case '*':
            solution = multiply(parseFloat(a), parseFloat(b));
            break;
        case '/':
            solution = divide(parseFloat(a), parseFloat(b));
            break;
        case '%':
            solution = modulo(parseFloat(a), parseFloat(b));
            break;    
    }
    return solution;
}

// performing the operation 
document.getElementById('equals').addEventListener('click', function() {
    operandAfter = display;
    if(operandAfter == "0") {
        updateDisplay("LOL NICE TRY ;)");
        setTimeout(function() {
            display = "";
            updateDisplay(display);
        }, 1500);
    } else {
    var solution = doMath(operandBefore, operandAfter, operator);
    // console.log(solution);
    if(String(solution).length >= 15) {
    display = solution.toFixed(12); // limit to 12 dec pts
    } else {
        display = solution;
    }
    updateDisplay(display);
    }
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

