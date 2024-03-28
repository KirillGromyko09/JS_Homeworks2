'use strict';
const num = +prompt('Введіть число');

if (num<1 || isNaN(num)){
    console.log('NaN')
}else{
    let divisor=2;

    while(num % divisor !== 0){
        divisor++
    }
    console.log('Найменший дільник ' + divisor)
}