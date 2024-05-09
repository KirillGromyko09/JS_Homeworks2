const ul = document.body.firstElementChild;
const arrNameAttr = [];
const arrValue = [];
for (const attributes of ul.attributes) {
  arrNameAttr.push(attributes);
  arrValue.push(attributes.nodeValue);
}
console.log(arrNameAttr);
console.log(arrValue);
ul.lastElementChild.innerHTML = 'Hello, my name is Kirill';
ul.firstElementChild.setAttribute('data-my-name', 'Kirill');
ul.removeAttribute('data-dog-tail');
