function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b == 0) {
        displayNumber.textContent = 'You wot m8?';
        return;
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function numberButtons() {
    for (i = -1; i < 10; i++) {
        const num = document.createElement('button');
        if (i < 0) {
            num.textContent = '.';
            num.setAttribute('id', 'decimal');
        } else {
            num.textContent = i;
            num.setAttribute('id', i);
        }
        num.classList.add('number');   
        numbers.appendChild(num);
        num.addEventListener('click', displayItem);
    }
}

function operatorButtons() {
    for (i = 0; i < operatorArray.length; i++) {
        const button = document.createElement('button');
        button.classList.add('operator');
        button.setAttribute('id', operatorArray[i].name);
        button.textContent = operatorArray[i].symbol;
        operators.appendChild(button);
        document.querySelectorAll('.operator').forEach(operator => operator.addEventListener('click', operatorValue));
    }
}

function functionButtons() {
    for (i = 0; i < functionsArray.length; i++) {
        const button  = document.createElement('button');
        button.classList.add('function');
        functionName = functionsArray[i].name
        button.setAttribute('id', functionName);
        button.textContent = functionsArray[i].symbol;
        functions.appendChild(button);
        button.addEventListener('click', window[functionName]);
    }
}

function operate(operator, a, b) {
    // using 'window' to allow a variable to be passed as a function call
    let num = window[operator](parseFloat(a), parseFloat(b))
    if (displayNumber.textContent === displayValue){
        displayNumber.textContent = num;
    }
    displayValue = '';
}

function equals() {
    if (num1 && operator && displayValue) {
        operate(operator, num1, displayValue)
    }
    num1 = '';
}

function operatorValue(){
    if (num1 && displayValue) {
        displayOperator.textContent = document.getElementById(operator).textContent;
        operate(operator, num1, displayValue);
    }
    operator = this.id;
    if (num1) {
        displayOperator.textContent = document.getElementById(operator).textContent;
        operate(operator, num1, displayValue);
    }
    displayOperator.textContent = document.getElementById(operator).textContent;
    num1 = displayNumber.textContent;
    displayValue = '';
}

function displayItem() {
    if (displayValue.length > 9) return;
    if (this.textContent.includes('.') && displayValue.includes('.')) return;
    displayValue += String(this.textContent);
    displayNumber.textContent = displayValue;
    displayOperator.textContent = '';  
}

function backspace() {
    if (operator) {
        operator = '';
        displayOperator.textContent = '';
    } else {
    displayValue = displayValue.slice(0, -1);
    displayNumber.textContent = displayValue;
    }
}

function clear() {
    displayNumber.textContent = 0
    displayValue = num1 = operator = displayOperator.textContent = '';
}

let num1 = '';
let operator = '';
let displayValue = '';

const operatorArray = [
    {name: 'add', symbol: '+'},
    {name: 'subtract', symbol: '-'},
    {name: 'multiply', symbol: 'x'},
    {name: 'divide', symbol: '÷'}
]

const functionsArray = [
    {name: 'equals', symbol: '='},
    {name: 'clear', symbol: 'C'},
    {name: 'backspace', symbol: '⌫'},
]

const displayNumber = document.getElementById('number-display');
const displayOperator = document.getElementById('operator-display');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
const functions = document.querySelector('.functions');

functionButtons();
operatorButtons();
numberButtons();


// TODO fix rounding and general decimal calculations
// TODO any decimals should not overflow
// TODO keyboard support
// TODO CSS