"use strict";
// Типизирование классов
class Emploeey {
}
let emp = new Emploeey();
// объявление типа свойства класса
// При описании свойств класса необходимо типизировать каждое свойство
// У нас есть класс Studen, у которого 
class Student {
    constructor() {
        this.name = "";
    }
    get() {
        return this.name + " " + this.age;
    }
    setName(str) {
        this.name = str;
    }
    setAge(num) {
        this.age = num;
    }
}
let stud = new Student();
console.log(stud.get());
stud.setName("John");
stud.setAge(40);
console.log(stud.get());
