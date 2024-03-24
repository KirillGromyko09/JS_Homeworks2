'use strict';
// 1
for (let i=20;i<=30;i+=0.5){
    document.write(i+ ', ')
}
// 2
const exchangeRate=27;
for (let dollars=10;dollars<=100;dollars+=10){
    let uah=dollars*exchangeRate;
    document.write(uah + ', ')
}
// 3
const someNumber = 100;

for (let x = 1; x <= 100; x++) {
    let square = x * x;
    if (square <= someNumber) {
        document.write(x + '; ');
    } else {
        break;
    }
}
//4
const number = 17;
let prime = true;

if (number <= 1) {
    prime = false;
} else {
    for (let y = 2; y <= Math.sqrt(number); y++) {
        if (number % y === 0) {
            prime = false;
            break;
        }
    }
}

if (prime) {
    document.write('<br>' + number + " просте число");
} else {
    console.log('<br>' + number + " не є простим числом");
}

//5
const newNumber = 81;

for (let z = 1; z < newNumber; z++) {
    const calculatedNumber = 3 ** z;

    if (calculatedNumber > newNumber) {
        document.write('<br> число не знайдене');
        break;
    }

    if (calculatedNumber !== newNumber) continue
    document.write('<br>' + calculatedNumber);
    break;
}