// getting values from buttons clicked
document.addEventListener('click', function(e) { // bubble method
    if(e.target.className == 'number') {
        console.log(e.target.value);
    }
});
// getting the innertext of the display
// this method returns display as an array, hence [0]
const display = document.getElementsByClassName('display')[0].innerText;
console.log(display);

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

