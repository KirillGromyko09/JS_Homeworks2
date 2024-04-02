'use strict';
const numbers = [1,2,3,-1,-2,-3];
const positiveNumbers = function (arr){
    const result = [];
    if (!arr.length) return 'empty'

    for (let i = 0; i < arr.length; i++){
        const isPositive = Math.sign(arr[i]) === 1 || Math.sign(arr[i]) === 0 ;
        isPositive && result.push(arr[i]);
    }

    return result.length ? result : null
}
console.log(positiveNumbers(numbers));