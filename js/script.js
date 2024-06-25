const getAllData = () => {
  const getData = new Promise((resolve, reject) => {
    const dataFromServer = fetch('https://jsonplaceholder.typicode.com/');
    resolve(dataFromServer);
  })
  return getData;
}
console.log(getAllData());
