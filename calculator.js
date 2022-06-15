function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b == 0) {
        displayNumber.textContent = 'To infinity and beyond!';
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
        num.classList.add('number', `${i}`);   
        numbers.appendChild(num);
        num.addEventListener('click', displayItem);
    }
}

document.addEventListener('keydown', function(event) {
    const operatorKeys = operatorArray.map(operator => (operator.key));

    const functionKeys = functionsArray.map(func => (func.key));

    if (!isNaN(event.key)) {
        document.getElementById(`${event.key}`).click();
    } else if (operatorKeys.includes(event.key)) {
        const operator = operatorArray.find(operator => (operator.key === event.key));
        document.getElementById(`${operator.name}`).click();
    } else if (functionKeys.includes(event.key) || functionKeys[0].includes(event.key)) {
        const funct = functionsArray.find(function(funct) {
            if (funct.key === event.key || funct.key[0] === event.key || funct.key[1] === event.key) {
                return true;
            }
        });
        document.getElementById(`${funct.name}`).click();
    } else if (event.key === '.') {
        document.getElementById('decimal').click();
    }
});

function operatorButtons() {
    for (i = 0; i < operatorArray.length; i++) {
        const button = document.createElement('button');
        button.classList.add('operator');
        button.setAttribute('id', operatorArray[i].name);
        button.textContent = operatorArray[i].symbol;
        operators.appendChild(button);
        button.addEventListener('click', operatorValue);
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

function operate(operator, numA, numB) {
    // using 'window' to allow a variable to be passed as a function call
    let result = window[operator](parseFloat(numA), parseFloat(numB))
    if (displayNumber.textContent === displayValue){
        displayNumber.textContent = result;
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
        displayValue = num1;
        num1 = '';
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
    {name: 'add', symbol: '+', key: '+'},
    {name: 'subtract', symbol: '-', key: '-'},
    {name: 'multiply', symbol: 'x', key: '*'},
    {name: 'divide', symbol: '÷', key: '/'}
]

const functionsArray = [
    {name: 'equals', symbol: '=', key: ['=', 'Enter']},
    {name: 'clear', symbol: 'C', key: 'c'},
    {name: 'backspace', symbol: '⌫', key: 'Backspace'},
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
// TODO CSS