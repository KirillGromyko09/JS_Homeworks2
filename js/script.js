'use strict';
// Part 1
const yearNowIs = new Date().getFullYear();
const userYearOfBirth = +prompt('Ваш рік народження?');


if (userYearOfBirth === null || userYearOfBirth === 0 || isNaN(userYearOfBirth)) {
    alert('Шкода, що Ви не захотіли ввести свій рік народженння');
} else {
    const age = yearNowIs - userYearOfBirth;
    const userNativeCity = prompt('В якому місті ви живите?');

    if (userNativeCity === null || userNativeCity === undefined || userNativeCity === '') {
        alert('Шкода, що Ви не захотіли ввести своє місто')
    } else {
        let cityMessage;
        if (userNativeCity === 'Київ') {
            cityMessage = 'столиці України';
        } else if (userNativeCity === 'Вашингтон') {
            cityMessage = 'столиці Сполучених Штатів Америки';
        } else if (userNativeCity === 'Лондон') {
            cityMessage = 'столиці Великої Британії';
        } else {
            cityMessage = userNativeCity;
        }


        const userFavoriteSport = prompt('Який ваш улюбленний спорт?');
        if (userFavoriteSport === null||userFavoriteSport===undefined|| userFavoriteSport=== ''){
        alert('Шкода , що ви не не захотіли ввести свій улюбленній спорт')
        }else {
        let sportMessage;
        if (userFavoriteSport=== 'футбол') {
            sportMessage = 'Лионель Месси';
        }else if (userFavoriteSport==='баскетбол'){
            sportMessage='Майкл Джордан';
        }else if (userFavoriteSport==='бокс'){
            sportMessage= 'Майк Тайсон';
        }
            alert('Ваш вік ' + age + '\n' +
                'Ви живете у ' + cityMessage + '\n' +
                'Ваш улюблений спорт - ' + userFavoriteSport + '. Хочеш стати як ' + sportMessage + '?')
        }
    }
}

