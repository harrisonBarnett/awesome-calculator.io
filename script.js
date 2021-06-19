
// update display value
function updateDisplay(a) {
    document.getElementById('display').innerText = String(a);
}

// global variables
let displayReturn = "";
let operandBefore = "";
let operator1 = "";
let operator2 = "";
let operandAfter = "";
let solution = "";

// clear all operation things
function clear() {
    operandBefore = "";
    operandAfter = "";
    displayReturn = "";
}

document.addEventListener('click', function(e) {
    if(e.target.className == 'number') { // bubbling up
        if(displayReturn.length < 14) {
            displayReturn += e.target.value;
        }
        updateDisplay(displayReturn);
    }
    // console.log(operandBefore);
    // console.log(operator);
    // console.log(operandAfter);
});

document.addEventListener('click', function(e) {
        if(e.target.className == 'operator') {
            if (!operandBefore) { 
                if (!solution) { 
                    operator1 = e.target.value;
                    operandBefore = displayReturn;
                    updateDisplay("");
                    displayReturn = "";
                } else {
                    if(!displayReturn) {
                        operandBefore = solution;
                        operator1 = e.target.value;
                    } else {
                        operandBefore = solution;
                        operandAfter = displayReturn;
                        solution = String(doMath(operandBefore, operandAfter, operator1));
                        updateDisplay(solution);
                        displayReturn = "";
                        clear();
                        operator1 = e.target.value;
                    }
                }
            } else {
                operandAfter = displayReturn;
                solution = String(doMath(operandBefore, operandAfter, operator1));
                updateDisplay(solution);
                displayReturn = "";
                clear();
                operator1 = e.target.value; 
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
    if(String(toReturn).length >= 15) {
        toReturn = toReturn.toFixed(12);
    }
    return toReturn;
}

// clearing the screen on button press
document.getElementById('clear').addEventListener('click', event => {
    clear();
    solution = "";
    updateDisplay("");
});

// equals event
document.getElementById('equals').addEventListener('click', event => {
    if(!solution) {
        operandAfter = displayReturn;
        solution = String(doMath(operandBefore, operandAfter, operator1));
        updateDisplay(solution);
        displayReturn = "";
        clear();
    } else {
        operandBefore = solution;
        operandAfter = displayReturn;
        solution = String(doMath(operandBefore, operandAfter, operator1));
        updateDisplay(solution);
        displayReturn = "";
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