'use strict';
const operation = prompt('Що ви хочете зробити? (add,sub,mult,div)');
const operand1= +prompt('Введіть перше число');
const operand2 = +prompt('Введіть друге число');

let result
let operationSymbol
 switch (operation) {
     case 'add':
         result=operand1 + operand2;
         operationSymbol = '+';
         break;

     case 'sub':
         result = operand1 - operand2;
         operationSymbol = '-';
         break;
     case 'mult':
         result = operand1 * operand2;
         operationSymbol = '*';
         break;
     case 'div':
         result=operand1 / operand2;
         operationSymbol = '/';
         break;
     default:
         alert('Невідома операція')
 }
if (operationSymbol){
    console.log(`${operand1} ${operationSymbol} ${operand2} = ${result}`);
}