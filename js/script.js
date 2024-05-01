const user1 = {
  name: 'John',
  lastName: 'Kramer',
  age: 54,
};

const user2 = {
  name: 'Sasha',
  lastName: 'Doe',
  age: 31,
};

function getFullName(prefix = 'Mr') {
  return `${prefix} ${this.name} ${this.lastName}`;
}
const user1Full = getFullName.bind(user1, 'Mr.');
console.log(user1Full());

function getFullName2(prefix = 'Mr') {
  return `${prefix} ${this.name} ${this.lastName}`;
}
const userFullName2 = getFullName2.bind(user2, 'Mr.');
console.log(userFullName2());
