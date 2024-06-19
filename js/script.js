import Student from './Student.js';

const firstStudent = new Student('Sergio', 'Leone', 1992);
firstStudent.present();
firstStudent.present();
firstStudent.setGrade(80);
firstStudent.present();
firstStudent.setGrade(100);
firstStudent.present();
firstStudent.setGrade(100);
firstStudent.present();
console.log(firstStudent.summary());
console.log(firstStudent);

const secondStudent = new Student('Alice' , 'Fox', 2000);
secondStudent.present();
secondStudent.present();
secondStudent.setGrade(90);
secondStudent.absent();
secondStudent.present();
secondStudent.setGrade(100);
secondStudent.present();
secondStudent.setGrade(40);
console.log(secondStudent.summary());
console.log(secondStudent);

const thirdStudent = new Student('John', 'Kramer' , 1961);
thirdStudent.present();
thirdStudent.present();
thirdStudent.setGrade(90);
thirdStudent.present()
thirdStudent.present();
thirdStudent.setGrade(100);
thirdStudent.present();
thirdStudent.setGrade(40);
console.log(thirdStudent.summary());
console.log(thirdStudent);

