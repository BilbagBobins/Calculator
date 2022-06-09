function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, a, b) {
    return operator(a, b);
}
const numbers = document.querySelector('.numbers');

for (i = 0; i < 10; i++) {
    const num = document.createElement('button');
    num.textContent = i;
    num.classList.add('number');
    num.setAttribute('id', i);
    numbers.appendChild(num);
}

