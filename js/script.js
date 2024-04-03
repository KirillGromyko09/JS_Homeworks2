'use strict';

const arr = [1,2,3];
const numbers = [4,5,6];
// 1
const result1 = arr.concat(numbers);
console.log(result1);
// 2
const reversed = arr.reverse();
console.log(reversed);
// 3
const arr2 = [1,2,3];
arr2.push(4,5,6)
console.log(arr2);
// 4
const arr3 = [1,2,3];
arr3.unshift(4,5,6);
console.log(arr3);
// 5
const arr4 = ['js','css','jq'];
document.write(arr4[0]);
// 6
const arr5 = ['js', 'css', 'jq'];
document.write(arr5[arr5.length -1]);
// 7
const arr6= [1,2,3,4,5];
const arr6Copy = arr6.slice(0,3);
console.log(arr6Copy);
// 8
const arr7 = [1,2,3,4,5];
const arr7Copy = arr7.slice(-2);
console.log(arr7Copy)
// 9
const arr8 = [1,2,3,4,5];
arr8.splice(1,2);
console.log(arr8);
// 10
const arr9 = [1,2,3,4,5];
const arr10 = arr9.slice(1,-1);
console.log(arr10);
// 11
const arr11 = [1,2,3,4,5];
arr11.splice(3,0, 'a','b', 'c');
console.log(arr11);
// 12
const arr12 = [1,2,3,4,5];
arr12.splice(1,0,'a','b');
arr12.splice(6,0, 'c');
arr12.push('e');
console.log(arr12);
// 13
const arr13 = [3,4,1,2,7];
arr13.sort();
console.log(arr13);
// 14
const arr14 = [5,6,7,8,9];
const sum = arr14.reduce(
    (accumulator , currentValue) =>accumulator +currentValue
)
console.log(sum);
// 15
const arr15 = [5,6,7,8,9];
const map1 = arr15.map((arr15)=> arr15 * arr15);
console.log(map1);
// 16
const arr16 = [1,-3,5,6,-7,8,9,-11];
const negativeNumbers = arr16.filter(function (num){
    return num < 0
    });
console.log(negativeNumbers);
// 17
const arr17 = [1,-3,5,6,-7,8,9,-11];
const positiveNumbers = arr17.filter(function (num){
    return num % 2 === 0 ;
});
console.log(positiveNumbers);
// 18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const str5 = arr18.filter((str) => str.length <= 5);
console.log(str5);
// 19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const subArr19 = arr19.filter(function (element){
    return Array.isArray(element);
});
console.log(subArr19);
// 20
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
const negativeNumbersLength = arr20.filter(function (num){
   return  num < 0 ;
});
console.log(negativeNumbersLength.length);
console.log(negativeNumbersLength);