'use strict';
const padString = function (str, length, symbol = '*', positionRight = true) {

    if (typeof str !== 'string' || typeof length !== 'number') {
        return 'помилка: невірні типи аргументів';
    }
    if (length < str.length) {
        return str.substr(0, length);
    }
    if (symbol.length !== 1) {
        return 'помилка: символ повинен бути рядком довжиною 1 символ';
    }

    const padLength = length - str.length;
    const padding = symbol.repeat(padLength);

    if (positionRight) {
        return str + padding;
    } else {
        return padding + str;
    }
}

console.log(padString('hello', 8));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));