import Human from './Human.js';
import Apartment from "./Apartment.js";

const human = new Human('vova', 'man');
console.log(human);
const apartment = new Apartment();
apartment.addResident(human);
console.log(apartment);

