function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(3));

function pow(num, degree) {
  if (degree === 1) {
    return num;
  }
  return num * pow(num, degree - 1);
}

console.log(pow(2, 10));

function sum(a, b) {
  if (b === 0) {
    return a;
  }
  return sum(a + 1, b - 1);
}

console.log(sum(31, 4));
