const car = {
  model: 'Mercedes-Benz',
  year: 2020,
  color: 'Black',
};

const anotherCar = {
  model: 'BMW',
  year: 2023,
  color: 'White',
};

const getFullCarName = (obj, prefix = 'Amazing') => `${prefix} ${obj.color} ${obj.model}`;

const car1Name = getFullCarName(car);
console.log(car1Name);

const car2Name = getFullCarName(anotherCar, 'Super');
console.log(car2Name);
