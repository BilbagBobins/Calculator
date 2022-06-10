function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b == 0) {
        display.textContent = 'You wot m8?';
        return;
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function numberButtons() {
    for (i = 0; i < 10; i++) {
        const num = document.createElement('button');
        num.textContent = i;
        num.classList.add('number');
        num.setAttribute('id', i);
        numbers.appendChild(num);
        const button = document.querySelectorAll('.number');
        button.forEach(number => number.addEventListener('click', displayItem))
    }
}

function operate(operator, a, b) {
    // using 'window' to allow a variable to be passed as a function call
    let num = window[operator](parseFloat(a), parseFloat(b))
    if (display.textContent === displayValue){
        display.textContent = num;
    }
    displayValue = '';
    operatorCounter++;
}

function equals() {
    if (num1 && operator && displayValue) {
        operate(operator, num1, displayValue)
    }
}

function operatorValue(){
    operator = this.id;
    if (num1) {
        operate(operator, num1, displayValue);
    }
    num1 = display.textContent;
    displayValue = '';
}

function displayItem() {
    if (displayValue.length > 9) return;
    displayValue += String(this.textContent);
    display.textContent = displayValue;  
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
}

function clear() {
    display.textContent = 0
    displayValue = num1 = operator = '';
    operatorCounter = 0;
}

let operatorCounter = 0;
let num1 = '';
let operator = '';
let displayValue = '';

const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');

const addButton = document.querySelector('#add').addEventListener('click', operatorValue);
const subtractButton = document.querySelector('#subtract').addEventListener('click', operatorValue);
const multiplyButton = document.querySelector('#multiply').addEventListener('click', operatorValue);
const divideButton = document.querySelector('#divide').addEventListener('click', operatorValue);
const clearButton = document.getElementById('clear').addEventListener('click', clear);
const backspaceButton = document.getElementById('backspace').addEventListener('click', backspace);
const equalsButton = document.querySelector('#equals').addEventListener('click', equals);

numberButtons();

// TODO fix consecutive calculations bug - outputting weird numbers
// TODO fix rounding and general decimal calculations
// TODO any decimals should not overflow
// TODO decimal button
// TODO keyboard support
// TODO CSS