'use strict';
'use strict';

const userAgeInput = +prompt("Введіть ваш вік");

if (!isNaN(userAgeInput) && userAgeInput !== null) {
    const age = parseInt(userAgeInput);

    let yearsWord;
    if (age % 10 === 1 && age % 100 !== 11) {
        yearsWord = "рік";
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        yearsWord = "роки";
    } else {
        yearsWord = "років";
    }

    alert("Вам " + age + " " + yearsWord);
} else {
    alert("Введіть ваш вік, будь ласка");
}