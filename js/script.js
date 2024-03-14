'use strict';
// Task 1
let user = {}
user.name = 'John';
user.surname= 'Smith';
user.name= 'Pete';
delete user.name;

// Task 2
const user2 = {
    name: 'John'
};
user2.name = 'Pete';
// Так,це буде прациювати, оскільки const обмежує зміну посилання на обєкт , а не його властивостей

// Task 3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);