const ulList = document.getElementById('ulId');
const liItems = document.getElementsByTagName('li');

const arr = [];
for (const element of liItems) {
  if (element instanceof HTMLElement) arr.push(element);
}
console.log(arr);
console.log(arr.length);

const textArray = [];
for (const item of liItems) {
  textArray.push(item.textContent);
}

console.log(textArray);
