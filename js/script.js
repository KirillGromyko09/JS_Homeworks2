'use strict';
const number= +prompt('Введіть число');
const degreeOfNumber = +prompt('Введіть ступінь числа');

function numberDegree (number,degreeOfNumber = 1){
    if (isNaN(number) || isNaN(degreeOfNumber)){
        alert('Введіть правильні значення');
        return;
    }
    return Math.pow(number,degreeOfNumber);
}
const result = numberDegree(number,degreeOfNumber);
if (result !== undefined){
    alert('Результат '+ result);
}
