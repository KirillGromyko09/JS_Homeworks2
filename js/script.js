'use strict';
const characters = 'nbhjbsbvxccbvxcbvhjsdgfhsdjhvgsd7656566756';
const keyLength = 10;
const generatedKey = generateKey(keyLength, characters);
function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}
console.log(generatedKey);