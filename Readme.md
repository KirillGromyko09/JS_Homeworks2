Homework 55
Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

Copy code
let ladder = {
step: 0,
up: function() {
this.step++;
},
down: function() {
this.step--;
},
showStep: function() { // показывает текущую ступеньку
alert( this.step );
}
};
Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

Copy code
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

Copy code
ladder.up().up().down().showStep(); // 1
Такой подход широко используется в библиотеках JavaScript.