'use strict';
// 1
const arr = ['a','b','c','d'];
const arr1 = arr.slice(0,2).join('+');
const arr2 = arr.slice(2).join('+');
document.write(arr1 + ',' + arr2);
// 2
const arr3 = [2,5,3,9];
const result = arr3[0] * arr3[1] + arr3[2] * arr3[3];
document.write(result);
// 3
const arr4 = [[1,2,3],[4,5,6],[7,8,9]];
document.write(arr4[1][0]);
// 4
const arr5 = {js:['jQuery' , 'Angular'],
    php:'hello',
    css:'world'
}
document.write(arr5.js[0]);
// 5
const arr6 = [];
for (let i = 1 ; i <= 10;i++){
    arr6.push('x'.repeat(i));
}
console.log(arr6);
// 6
const arr7 = [];
for (let i =1 ; i <= 10 ; i++){
    arr7.push(String(i).repeat(i));
}
console.log(arr7);
// 7
function arrayFill(value,length){
    const array = [];
    for (let i =1 ; i < length ; i++){
        array.push(value);
    }
    return array;
}

console.log(arrayFill());
// 8
const arr8= [3,6,1,6,9];
let sum = null;
let count=null;
for (let i =1 ; i < arr8.length;i++){
    sum += arr8[i];
    count++;
    if (sum > 10){
        break;
    }
}
console.log(sum);

// 9
const arr9 = [1,2,3,4,5,'123123'];
let reversedArr = [];
for (let i = arr9.length -1 ; i >= 0 ;i--){
    reversedArr.push(arr9[i]);
}
console.log(reversedArr);

// 10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum2 = 0;
for (let i = 0;i < arr10.length;i++){
    for (let j = 0;j < arr10[i].length;j++){
        sum2 +=arr10[i][j];
    }
}
console.log(sum2);
// 11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum3 = 0;
for (let i =0;i<arr11.length;i++){
    for (let g = 0;g<arr11[i].length;g++){
        for (let f = 0;f<arr11[i][g].length;f++){
            sum3 += arr11[i][g][f];
        }
    }
}
console.log(sum3);