(function () {
  const sum = function (param) {
    let total = param;
    return function (num) {
      total += num;
      return total;
    };
  };
  const result = sum(0);
  console.log(result(3));
  console.log(result(5));
  console.log(result(20));
}());
