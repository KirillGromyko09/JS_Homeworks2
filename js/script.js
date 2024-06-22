import Human from './Human.js';
import Apartment from "./Apartment.js";
import House from "./House.js";

const human1 = new Human('vova', 'man');
const human2 = new Human('Jane', 'woman');
const human3 = new Human('Jane', 'woman');
const human4 = new Human('Jane', 'woman');
const human5 = new Human('Jane', 'woman');
const human6 = new Human('Jane', 'woman');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(human1);
apartment1.addResident(human2);

apartment2.addResident(human3);
apartment2.addResident(human4);

apartment3.addResident(human5);
apartment3.addResident(human6);

const house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);


console.log(house);


