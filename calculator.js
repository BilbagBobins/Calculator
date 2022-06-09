function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b == 0) return;
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, a, b) {
    // using 'window' to allow a variable to be passed as a function call
    let num = window[operator](parseFloat(a), parseFloat(b))
    display.textContent = num;
    displayValue = '';
}

function operatorValue(){
    operator = this.id;
    num1 = displayValue;
    displayValue = '';
}

function displayItem() {
    if (displayValue.length > 9) return;
    displayValue += String(this.textContent);
    display.textContent = displayValue;  
}

let num1 = '';
let operator = '';
let displayValue = '';
const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');
const equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    if (num1 && operator && displayValue) {
        operate(operator, num1, displayValue)
    }
});

const addButton = document.querySelector('#add').addEventListener('click', operatorValue);
const subtractButton = document.querySelector('#subtract').addEventListener('click', operatorValue);
const multiplyButton = document.querySelector('#multiply').addEventListener('click', operatorValue);
const divideButton = document.querySelector('#divide').addEventListener('click', operatorValue);


for (i = 0; i < 10; i++) {
    const num = document.createElement('button');
    num.textContent = i;
    num.classList.add('number');
    num.setAttribute('id', i);
    numbers.appendChild(num);
    const button = document.querySelectorAll('.number');
    button.forEach(number => number.addEventListener('click', displayItem))
}

