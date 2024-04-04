'use strict';
// 1
const arr = ['1','2','3,4,5,6,6,6,6','a','abc'];
console.log(arr.indexOf('1'));

// 2
console.log('hello'.lastIndexOf('e'));

// 3
const students = [
    {name:'John'},
    {name:'Igor'},
    {name:'Alice'},
    {name:'Josh'}
];
const student = students.find(function (element) {
    return element.name === "John";
})
console.log(student);

// 4
const findIndex = students.findIndex(function (element){
    return element.name === 'Alice';
});
console.log(findIndex);

// 5
console.log([1,2,3,4,5,6,7].includes(3));

// 6
const arr2 = [12,5,3,1,10,25,30];
const isBigEnough = function (element){
    return element >=5;
};
console.log(arr2.every(isBigEnough));

// 7
console.log(arr2.some(isBigEnough));

// 8
const sum = arr2.reduce(function (accumulator ,currentValue){
    return accumulator + currentValue;
},0);
console.log(sum);