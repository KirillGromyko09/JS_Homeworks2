'use strict';

(function() {
  const cacheFunc = function (func, size) {
    const cache = new Map();

    return (...args) => {
      const key = JSON.stringify(args);

      if (cache.has(key)) {

        return cache.get(key);
      }



      if (cache.size > size) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
      const result = func(...args);
      cache.set(key, result);

      return result;
    };
  };

  function multiplicationFunction(num) {
    return num * 1;
  }

  const cachedMultiplicationFunction = cacheFunc(multiplicationFunction, 10);

  console.log(cachedMultiplicationFunction(1));
  console.log(cachedMultiplicationFunction(2));
  console.log(cachedMultiplicationFunction(3));
  console.log(cachedMultiplicationFunction(4));
  console.log(cachedMultiplicationFunction(5));
  console.log(cachedMultiplicationFunction(6));
  console.log(cachedMultiplicationFunction(7));
  console.log(cachedMultiplicationFunction(8));
  console.log(cachedMultiplicationFunction(9));
  console.log(cachedMultiplicationFunction(10));
  console.log(cachedMultiplicationFunction(11));
  console.log(cachedMultiplicationFunction(12));
  console.log(cachedMultiplicationFunction(13));
  console.log(cachedMultiplicationFunction(14));
}());


