'use strict';
// Part 1
// const x =10;
// const y = 7;
//
// const compare = x > y ? 'x більше ніж y' : 'x менше ніж y';
// console.log(compare);

// Part 3
const userNumber = prompt('Введіть ціле число');
const numberLenght = userNumber.length;
const num = parseInt(userNumber);

if (!isNaN(num)){
    if (num > 0){
        if (numberLenght===1){
            alert('Число ' + num + ' є однозначним позитивним');
        }else if (numberLenght===2){
            alert('Число '+ num + ' є двозначно позитивним');
        }else {
            alert('Число '+ num + ' є троьхзначним позитивним або більше')
        }
    }else if (num < 0){
        if (numberLenght===1){
            alert('Число ' + num + ' є однозначно негативним');
        }else if (numberLenght===2){
            alert('Число '+ num +' є двозначно негативним');
        }else {
            alert('Число ' + num + ' є трьохзначно негативним або більше');
        }
    }else {
        alert('Ви ввели нуль');
    }
}else {
    alert('Ви ввели не число')
}

//4
const firstNumber = +prompt('Введите перше число');
const secondNumber = +prompt('Введите друге число');
const thirdNumber = +prompt('Введите третє число');

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    alert('Найбільше з введених чисел є ' + firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    alert('Найбільше з введених чисел є ' + secondNumber);
} else if (thirdNumber > firstNumber && thirdNumber >secondNumber) {
    alert('Найбільше з введених чисел є ' + thirdNumber);
} else {
    alert('ви не ввели жодного числа')
}



//5
const a = +prompt('введите довжину для сторони "а" трикутника');
const b = +prompt('введите довжину для сторони "b" трикутника');
const c = +prompt('введите довжину для сторони "c" трикутника');

if ((a+b) > c || (c+b) > a || (a+c) > b) {
    alert('з такими довжинами трикунтик може існувати')
} else {
    alert('з такими довжинами трикунтик НЕ може існувати')
}
