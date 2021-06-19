
// update display value
function updateDisplay(a) {
    document.getElementById('display').innerText = String(a);
}

// global variables
let displayReturn = "";
let operandBefore = "";
let operator = "";
let solution = "";

// clear all operation things
function clear() {
    operandBefore = "";
    operandAfter = "";
    displayReturn = "";
}

// get numbers from pressed button
// and concat to display
document.addEventListener('click', function(e) {
    if(e.target.className == 'number') { // bubbling up
        if(displayReturn.length < 14) { // preventing overflow on screen
            displayReturn += e.target.value;
        }
        updateDisplay(displayReturn);
    }
});

document.addEventListener('click', function(e) {
        if(e.target.className == 'operator') {
            // performed after clear()s or on the first pass
            if (!operandBefore) { 
                if (!solution) { 
                    operator = e.target.value;
                    operandBefore = displayReturn;
                    updateDisplay("");
                    displayReturn = "";
                } else {
                    // performed on the first pass
                    if(!displayReturn) {
                        operandBefore = solution;
                        operator = e.target.value;
                    // performed after clear()s
                    } else {
                        operandBefore = solution;
                        operandAfter = displayReturn;
                        solution = String(doMath(operandBefore, operandAfter, operator));
                        updateDisplay(solution);
                        clear();
                        operator = e.target.value;
                    }
                }
            // performed on operation strings
            } else {
                operandAfter = displayReturn;
                solution = String(doMath(operandBefore, operandAfter, operator));
                updateDisplay(solution);
                clear();
                operator = e.target.value; 
            }
        }
});

// switch case to perform whatever math operation
function doMath(a, b, op) {
    toReturn = "";
    switch(op) {
        case '+':
            toReturn = add(parseFloat(a), parseFloat(b));
            break;
        case '-':
            toReturn = subtract(parseFloat(a), parseFloat(b));
            break;
        case '*':
            toReturn = multiply(parseFloat(a), parseFloat(b));
            break;
        case '/':
            if(b==0) {
                toReturn = "LOL NICE TRY";
                break;
            } else {
                toReturn = divide(parseFloat(a), parseFloat(b));
                break;
            }
        case '%':
            toReturn = modulo(parseFloat(a), parseFloat(b));
            break;    
    }
    // preventing overflow on the calculator screen
    if(String(toReturn).length >= 15) {
        toReturn = toReturn.toFixed(12);
    }
    return toReturn;
}

// clearing the screen on button press
document.getElementById('clear').addEventListener('click', event => {
    clear();
    operator = "";
    solution = "";
    updateDisplay("");
});

// equals event
document.getElementById('equals').addEventListener('click', event => {
    // performed on first pass
    if(!solution) {
        operandAfter = displayReturn;
        solution = String(doMath(operandBefore, operandAfter, operator));
        updateDisplay(solution);
        clear();
    // peformed after operation strings
    } else {
        operandBefore = solution;
        operandAfter = displayReturn;
        solution = String(doMath(operandBefore, operandAfter, operator));
        updateDisplay(solution);
        clear();
    }
});

// math operations
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