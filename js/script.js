const arr = [11, 22, 33];
const getIteratorObj = (itrDataStructure) => {
  const dataArr = Array.from(itrDataStructure);
  let currentIndex = 0;
  return {
    next() {
      let done = false;
      if (currentIndex + 1 > dataArr.length) {
        return {
          done: true,
        };
      }
      const result = {
        value: dataArr[currentIndex],
        done: false,
      };
      currentIndex += 1;
      return result;
    },
  };
};
const itr = getIteratorObj(arr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
