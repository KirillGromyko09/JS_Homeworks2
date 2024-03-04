'use strict';
const temp= +prompt('Please specify the temperature');
const type = prompt('Specify the unit of measurement where F is Fahrenheit and C is Celsium');

if (!isNaN(temp)) {
    let result = null;

    if (type.toUpperCase() === 'F') {
        result = ('It will be ') + (temp - 32) * 9 / 5 +(' degrees Fahrenheit');
    } else if (type.toUpperCase() === 'C') {
        result = ('It will be ') + ((temp * 9 / 5) + 32) + (' degrees Celsium');
    } else {
        result = ('Error , check the entered data and try again ');
    }
    alert(result);
} else {
    alert('Wrong number!');
}