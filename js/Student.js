class Student {
  #firstName = null;

  #lastName = null;

  #birthYear = null;

  #grades = [];

  #attendance = [];

  #currentLessonIndex = 0;

  constructor(firstName, lastName, yearOfBirth, lessonsCount = 25) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = yearOfBirth;
    this.#lessonsCount = 25;
  }

  #setAttendance(bool) {
    if (typeof bool !== 'boolean') throw new Error('bool should be a boolean value');
    this.#attendance[this.#currentLessonIndex] = bool;
    this.#currentLessonIndex += 1;
  }

  present() {
    this.#setAttendance(true);
  }

  absent() {
    this.#setAttendance(false);
  }

  summary() {
    if (this.avgGrades > 90 && this.avgAttendance > 0.9) {
      console.log('Молодец!');
    } else if (this.avgGrades > 90 || this.avgAttendance > 0.9) {
      console.log('Отлично, но можно и лучше');
    } else {
      console.log('Редиска');
    }
    return {
      avgGrades: this.avgGrades,
      avgAttendance: this.avgAttendance,
    };
  }

  get avgGrades() {
    let sum = 0;
    let lessonsWithGrades = 0;
    for (let i = 0; i < this.#currentLessonIndex; i++) {
      if (this.#grades[i] !== null) lessonsWithGrades += 1;
      sum += this.#grades[i];
    }
    return Number(sum / lessonsWithGrades).toFixed(2);
  }

  get avgAttendance() {
    let visitedLessons = 0;
    for (let i = 0; i < this.#currentLessonIndex; i++) {
      if (!this.#attendance[i]) continue;
      visitedLessons += 1;
    }
    return Number(visitedLessons / this.#currentLessonIndex).toFixed(2);
  }

  setGrade(grade) {
    if (typeof grade !== 'number') throw new Error('Grade is invalid');
    if (grade < 0 || grade > 100) throw new Error(`Grade is invalid, cannot be ${grade}`);
    if (!this.#attendance[this.#currentLessonIndex - 1]) throw new Error(`Student ${this.firstName} is absent`);
    this.#grades[this.#currentLessonIndex - 1] = grade;
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

  set #lessonsCount(count) {
    if (typeof count !== 'number' || count < 1) throw new Error('Lessons count is invalid');
    this.#grades = new Array(count).fill(null);
    this.#attendance = new Array(count).fill(null);
  }
}

export default Student;
