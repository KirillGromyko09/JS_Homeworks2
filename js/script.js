import Student from './Student.js';

const s = new Student('Sergio', 'Leone', 1992);
s.present();
s.present();
s.setGrade(80);
s.present();
s.setGrade(100);
s.present();
s.setGrade(100);
s.present();

console.log(s.summary());

console.log(s);
