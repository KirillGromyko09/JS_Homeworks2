'use strict';
const operand1 = parseFloat(prompt('Enter first operand'));
const operand2 = parseFloat(prompt('Enter second operand'));
if (!isNaN(operand1)) {
    alert('Your first operand is ' + operand1);
} else {
    alert('Please enter a valid value');
}
if (!isNaN(operand2)) {
    alert('Your second operand is ' + operand2);
} else {
    alert('Please enter a valid value');
}
const addResult = operand1 + operand2;
const subResult = operand1 - operand2;
const multResult = operand1 * operand2;
const divResult= operand1 / operand2;
alert(`Result: ${operand1} + ${operand2} = ${addResult}`);
alert(`Result: ${operand1} - ${operand2} = ${subResult}`);
alert(`Result: ${operand1} * ${operand2} = ${multResult}`);
alert(`Result: ${operand1} / ${operand2} = ${divResult}`);