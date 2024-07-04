import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";

const getAllData = () => {
  const getData = new Promise((resolve, reject) => {
    const dataFromServer = fetch('https://jsonplaceholder.typicode.com/todos/1');
    resolve(dataFromServer);
  })
  return getData;
}
console.log(getAllData());
const p = getAllData();
console.log(p);
