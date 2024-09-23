const screen = document.getElementById('calculator-screen');
let currentValue = '';
let operator = '';
let previousValue = '';

const keys = document.querySelectorAll('.key');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

keys.forEach(key => {
    key.addEventListener('click', function () {
        const value = this.value;

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            previousValue = currentValue;
            currentValue = '';
        } else {
            currentValue += value;
            screen.value = currentValue;
        }
    });
});

equalButton.addEventListener('click', function () {
    if (previousValue && currentValue && operator) {
        let result;
        const prev = parseFloat(previousValue);
        const curr = parseFloat(currentValue);

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
        }

        screen.value = result;
        currentValue = result;
        operator = '';
        previousValue = '';
    }
});

clearButton.addEventListener('click', function () {
    currentValue = '';
    previousValue = '';
    operator = '';
    screen.value = '';
});
