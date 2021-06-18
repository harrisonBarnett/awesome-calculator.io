// getting the innertext of the display
var display = String(document.getElementById('display').innerText);

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
    updateDisplay("");
});


var operandBefore = "";
var operator = "";
var operandAfter = "";

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
        // document.getElementById('display').innerText = "";
        updateDisplay("");
    
    }
});


// performing the operation 
document.getElementById('equals').addEventListener('click', function() {
    operandAfter = display;
    let solution = "";
    switch(operator) {
        case '+':
            solution = String(add(parseInt(operandBefore), parseInt(operandAfter)));
            break;
    }
    // display = solution;
    updateDisplay(solution);
    console.log(solution);
    clear();
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

