'use strict';
const arr = [1, 2, 3, 4, 5];
let sum=0;

for (let i=0;i<arr.length;i++){
    sum +=arr[i];
}
console.log(sum);

const arr2 = [1,2,3,4,5];
let mult=0;

for (let a = 0;a<arr2.length;a++){
    mult +=arr2[a] * arr2[a];
}
console.log(mult)