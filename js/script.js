(function () {
  const arr = [1, 2, [1.1, 1.2, 1.3], 3];
  const generateList = (array) => {
    const ulList = document.createElement('ul');

    array.forEach((item) => {
      const listItem = document.createElement('li');

      if (Array.isArray(item)) {
        listItem.appendChild(generateList(item));
      } else {
        const textNode = document.createTextNode(item);
        listItem.appendChild(textNode);
      }

      ulList.appendChild(listItem);
    });

    return ulList;
  };

  console.log(generateList(arr));
}());
