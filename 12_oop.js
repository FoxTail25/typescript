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
// console.log(stud.get())
stud.setName("John");
stud.setAge(40);
// console.log(stud.get())
//================================================================================================
// Объявление свойств через конструктор
// При объявлении свойств через конструктор их начальные значения можно не задавать. Главное указать их тип
class Emploeey1 {
    constructor(str, str2, age, salary) {
        this.name = str;
        this.surn = str2;
        this.age = age,
            this.salary = salary;
    }
}
let emp1 = new Emploeey1('Mark', 'Bens', 45, 3000);
//=================================================================================================
// Наследование.
// Наследование классов в typeScript происходит так же как и в javaScript
class User {
    constructor(name) {
        this.name = name;
    }
}
class Emploeey2 extends User {
    constructor(name, sal) {
        super(name);
        this.salary = sal;
    }
}
let Emp2 = new Emploeey2('Bill', 4000);
//==============================================================================================
// Модификаторы доступа свойст класса
// В typeScript свойства и методы можно сделать приватными, и защищунными с помощью ключевых слов.
// Всего в typeScript 4 модификатора: public, protected, private, readonly;
// Если при создании класса не указать модификаторы. То все свойства и методы будут публичными и доступными к изменению.
// Модификатор public
// Свойства и методы класса объявленные с модификатором poblic доступны извне для чтения и записи
// Пример:
class User2 {
    constructor() {
        this.name = 'Smith';
        this.yearBold = 1980;
    }
    getAge() {
        return new Date().getFullYear() - this.yearBold;
    }
}
let us = new User2();
// console.log(us.getAge()) //44
// Модификатор private
// Свойства и методы класса объявленные с модификатором private НЕ доступны извне для чтения и записи. (Даже в потомках). Доступ к этим свойствам и методам доступен только изнутри класса.
// Пример:
class User3 {
    constructor(name, age) {
        this.sex = 'male';
        this.sex2 = "male";
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getSex() {
        console.log(this.sex);
        console.log(this.name);
    }
}
let us3 = new User3('Max', 40);
// us3.getName()
// us3.getAge()
us3.setName('Born');
us3.setAge(30);
// us3.getName()
// us3.getAge()
class User4 extends User3 {
}
let us4 = new User4('Mila', 35);
// us4.getAge()
// us4.getSex()
// Модификатор protected
// ?!?!?__Приватные свойства и методы не наследуются потомкамт__?!?! 
// Иногда нам нужно что бы свойства и методы были недоступны снаружи класса, но при этом наследовались потомками. В таких случаях используется модификатор protected
class User5 {
    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}
// Сдулаем класс student наследуемый от класса user
class Student2 extends User5 {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(this.cape(this.name));
    }
}
let stud2 = new Student2('john');
// stud2.showName()
// Задача
// Дан следующий класс:
class User22 {
    constructor(name, surn) {
        this.test = 'test';
        this.level = 'midle';
        this.name = name;
        this.surn = surn;
    }
    getTest() {
        console.log(this.test);
    }
}
let us22 = new User22('run', 'bun');
us22.getTest();
// Унаследуйте от этого класса класс Employee, который добавит защищенное свойство salary, а также геттеры всех свойств, как своих, так и унаследованных.
class Emploeey22 extends User22 {
    constructor(name, surn, salary) {
        super(name, surn); // super по сути является конструктором предка(родителя)
        this.salary = 3000;
        if (salary) { // т.к. переменная salary в конструкторе указана как необязательная (salary?:). поставим ветвление, которое будет срабатывать только если переменная salary получит значение
            this.salary = salary;
        }
    }
    getName() {
        console.log(this.name);
    }
    getSurn() {
        console.log(this.surn);
    }
    getSal() {
        console.log(this.salary);
    }
}
let emp22 = new Emploeey22('Bin', 'red', 5000);
// emp22.getSal()
// console.log(emp22.level)
emp22.getTest();
// Модификатор readonly
// С помощью модификатора readonly свойства можно сделать доступными только для чтения.
class User6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let us6 = new User6('John', 40);
console.log(us6.name); // = John;
// us6.name = 'Eric' // Такая запись вызовет ошибку т.к. свойство name доступно только для четния.
//==============================================================================================
// Так же как в чистом JavaScript в typeScript можно делать "аксессоры свойств" (гетеры и сеттеры).
// Однако в отличии от js, в ts имена аксессоров не должны совпадать с именами свойств.
class User7 {
    constructor() {
        this.name = '';
        this.age = NaN;
    }
    set _name(name) {
        this.name = name;
    }
    get _name() {
        return this.name;
    }
    set _age(age) {
        this.age = age;
        if (0 < age && age < 120) {
            this.age = age;
        }
        else {
            console.log('warning wrong age');
        }
    }
    get _age() {
        return this.age;
    }
}
//==================================================================================================
// Статические свойства. 
// В typeScript можно делать свойства которые будут принадлежать классу а не объекту. Такие свойства называются статическими(static). Статические свойства можно вызывать без создания объекта. Просто обратившись к классу в котором они объявленны. Для того, что бы сделать свойство статическим, нужно полсле объявления модификатора написать ключевое слово static.
// Пример:
class User8 {
    constructor(name, salary) {
        this.name = name;
    }
}
User8.salary = 2000;
