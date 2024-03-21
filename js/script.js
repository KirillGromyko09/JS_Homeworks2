'use strict';
let a;
switch (true){
    case a===0:
        alert('Вірно');
        break;
    case a>0:
        alert('Вірно');
        break;
    case a<0:
        alert('Вірно');
        break;
    default:
        alert('Невірно')
}
switch (true){
    case a>=0:
        alert('Вірно');
        break;
    case a<=0:
        alert('Вірно');
        break;
    case a!==0:
        alert('Вірно');
        break;
    default:
        alert('Невірно')
}
switch (true){
    case a==='test':
        alert('Вірно');
        break;
    case a===1:
        alert('Вірно');
        break;
    case a>0 && a<5:
        alert('Вірно');
        break;
    default:
        alert('Невірно')
}
switch (true) {
    case a === 0 || a === 2:
        alert (a += 7);
        break;
    default:
        alert(a / 10);
}

let b;
switch (true){
    case a<=1 && b>=3:
        alert(a + b);
        break;
    default:
        alert(a - b);
}
switch (true){
    case a>2 && a<11 || b>=6 && b<14:
        alert('Вірно');
        break;
    default:
        alert('Невірно')
}
const num =1;
let result;

switch (true){
    case num===1:
        result='Зима';
        break;
    case num===2:
        result='Весна';
        break;
    case num===3:
        result='Літо';
        break;
    case num===4:
        result='Осінь';
        break;
    default:
        result='Невідомий сезон';
}
console.log(result)