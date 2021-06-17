// getting the innertext of the display
// this method returns display as an array, hence [0]
var display = String(document.getElementById('display').innerText);

// number button event listener
document.addEventListener('click', function(e) { // bubble method
    if(e.target.className == 'number') {
        display += e.target.value;
        document.getElementById('display').innerText = display;
    }
});

// clearing the screen on button press
document.getElementById('clear').addEventListener('click', event => {
    display = "";
    document.getElementById('display').innerText = "";
});


var operandBefore = "";
var operator = "";
var operandAfter = "";

// operator button event listener
document.addEventListener('click', function(e) { // bubble method
    if(e.target.className == 'operator') {
        operandBefore = display;
        operator = e.target.value;
        display = ""; // clear between button presses
        document.getElementById('display').innerText = "";
    
    }
});

// clear cache
function clear() {
    operandBefore = "";
    operator = "";
    operandAfter = "";
}

// performing the operation 
document.getElementById('equals').addEventListener('click', function() {
    operandAfter = display;
    solution = "";
    switch(operator) {
        case '+':
            solution = String(add(parseInt(operandBefore), parseInt(operandAfter)));
            break;
    }
    console.log(solution);
    display = solution;
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

