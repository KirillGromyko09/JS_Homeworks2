const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];
const array = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const result = [];
function flat(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arguments.length !== 1) {
      throw new Error('Function accepts only 1 argument, too much arguments provided');
    } else if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      flat(arr[i]);
    }
  }
  return result;
}

console.log(flat(complexArray));
// console.log(flat(array));
