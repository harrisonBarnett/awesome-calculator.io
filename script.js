// getting the innertext of the display
// this method returns display as an array, hence [0]
var display = String(document.getElementsByClassName('display')[0].innerText);

// getting values from buttons clicked
document.addEventListener('click', function(e) { // bubble method
    if(e.target.className == 'number') {
        display += e.target.value;
        document.getElementById('display').innerText = display;
    }
});

// clearing the screan
document.getElementById('clear').addEventListener('click', event => {
    display = "";
    document.getElementsByClassName('display')[0].innerText = "";
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

