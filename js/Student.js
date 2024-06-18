class Student {
  #firstName = null;

  #lastName = null;

  #birthYear = null;

  #grades = [];

  #attendance = [];

  constructor(firstName, lastName, yearOfBirth, lessonsCount = 25) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = yearOfBirth;
    this.#lessonsCount = 25;
  }

  present() {

  }

  absent() {

  }

  summary() {

  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(str) {
    if (typeof str !== 'string' || str.trim().length < 2) throw new Error(` ${str} must be at least 2 characters.`);
    this.#firstName = str;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(str) {
    if (typeof str !== 'string' || str.trim().length < 2) throw new Error(` ${str} must be at least 2 characters.`);
    this.#lastName = str;
  }

  set birthYear(year) {
    if (typeof year !== 'number' || year.toString().length < 4) throw new Error(`${year} is invalid`);
    this.#birthYear = year;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    if (currentYear <= this.#birthYear) throw new Error('Invalid date');
    return currentYear - this.#birthYear;
  }

  get avgGrades() {

  }

  set #lessonsCount(count) {
    if (typeof count !== 'number' || count < 1) throw new Error('Lessons count is invalid');
    this.#grades = new Array(count).fill(null);
    this.#attendance = new Array(count).fill(null);
  }
}
const s = new Student('Sergio', 'Leone', 1992);
console.log(s);

export default Student;
