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
        this.level = 'midle';
        this.name = name;
        this.surn = surn;
    }
}
let us22 = new User22('run', 'bun');
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
// Модификатор readonly
// С помощью модификатора readonly свойства можно сделать доступными только для чтения.
class User6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let us6 = new User6('John', 40);
// console.log(us6.name) // = John;
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
//======================================================================================================================================
// Статические свойства. 
// В typeScript можно делать свойства которые будут принадлежать классу а не объекту. Такие свойства называются статическими(static). Статические свойства можно вызывать без создания объекта. Просто обратившись к классу в котором они объявленны. Для того, что бы сделать свойство статическим, нужно полсле объявления модификатора написать ключевое слово static.
// Пример:
class User8 {
    constructor(name) {
        this.name = name;
    }
    setSalary(sal) {
        User8.salary = sal;
    }
}
User8.salary = 2000;
// console.log(User8.salary) // 2000
class Student3 extends User8 {
    constructor(name) {
        super(name);
        this.name = name;
        Student3.salary = Student3.salary + 500;
    }
}
Student3.speciality = 'programmer';
// Статические свойства принадлежат конструктору класса и будут общими для всех объектов этого класса! НО!! При наследовании класса. Статические свойства будут отилчаться. Т.е. У родительского класса будут свои статические метод(ы), а у его потомков свои!!
//===========================================================================================================================================
// Статические методы класс
// Статическими могут быть не только свойства но и методы. Такие методы, так же как и свойства можно вызывать без объявления класса.
// Пример:
class Calc0 {
    static getSum(arr) {
        return arr.reduce((acc, el) => acc += el, 0);
    }
    static getSumSquare(arr) {
        return arr.reduce((acc, el) => acc += el ** 2, 0);
    }
    static getSumQube(arr) {
        return arr.reduce((acc, el) => acc += el ** 3, 0);
    }
}
// console.log(Calc0.getSum([1, 2, 3]))
// console.log(Calc0.getSumSquare([1, 2, 3]))
// console.log(Calc0.getSumQube([1, 2, 3]))
// Абстрактные ООП классы в typeScript
// Если нам необходим класс, содержащий общие свойства и методы. И от него мы будем наследовать классы потомков. При этом мы не будем создавать экзепляров класс. Что бы явно запретить создавать экземпляры класса, такой класс объявляется абстрактным. Для этого используется ключевое слово abstract.
// Пример
class UserAbs {
    constructor(name) {
        this.name = name;
    }
}
// let usA = new UserAbs('Mark') // Такая запись прведёт к ошибке т.к. невозможно создать экзепляр абстрактного класса!
class studAbs extends UserAbs {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}
let stA = new studAbs('studs', 5);
// console.log(stA.name) // studs
// console.log(stA.course) // 5
// ==========================================================================================================================================
// Задача: Создайте абстрактный класс Figure, представляющий собой геометрическую(четырёхстороннюю) фигуру. Пусть в нем будут свойства для периметра и площади.
class FugureA {
    constructor(a, b) {
        this.sideA = a;
        this.sideB = b;
    }
    getSquare() {
        console.log(this.sideA * this.sideB);
    }
    getPerimetr() {
        console.log((this.sideA + this.sideB) * 2);
    }
}
// Сделайте класс Square, наследующий от класса Figure.
class Square extends FugureA {
}
let sqrt = new Square(2, 2);
// sqrt.getSquare() //4
// sqrt.getPerimetr() //8
//Сделайте класс Rectangle, наследующий от класса Figure.
class Rectangle extends FugureA {
}
let rect = new Rectangle(3, 4);
// rect.getSquare() //12
// rect.getPerimetr() //14
// =========================================================================================================================================
// Адстрактные методы в ООП typeScript
// Бывает так, что у классов-потомков должен быть общий метод, однако, реализация этого метода зависит от конкретного потомка. В этом случаке этот метод можно  объявить в абстрактном классе родителя, не написав его реализаци. И тогда потомки обязаны реализовать этот метод. Такие методы называются абстрактными и так же объявляются с помощью ключевого слова abstract.
// Пример:
class PeoplA {
    constructor(name) {
        this.name = name;
    }
}
class Employee_PA extends PeoplA {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
    show() {
        return `${this.name} ${this.salary}`;
    }
}
// Задача: В абстрактном классе Figure сделайте абстрактные методы для получения площади и периметра.
class FugureA2 {
    constructor(a, b) {
        this.sideA = a;
        this.sideB = b;
    }
}
class Sqrt2 extends FugureA2 {
    constructor(a, b) {
        super(a, b);
    }
    getSquare() {
        let square = this.sideA * this.sideB;
        console.log(square);
        return square;
    }
    getPerimetr() {
        let perimetr = (this.sideA + this.sideB) * 2;
        console.log(perimetr);
        return perimetr;
    }
}
class Rectangle2 extends FugureA2 {
    constructor(a, b) {
        super(a, b);
    }
    getSquare() {
        let square = this.sideA * this.sideB;
        console.log(square);
        return square;
    }
    getPerimetr() {
        let perimetr = (this.sideA + this.sideB) * 2;
        console.log(perimetr);
        return perimetr;
    }
}
// Теперь мы можем создать объект с заданными свойствами (и их типами)
let userInt = {
    name: 'John',
    age: 30
};
// Задача 2
// Реализуйте объект calc созданного выше интерфейса.
let calc = {
    num1: 5,
    num2: 7
};
// Реализуем наш метод в объекте:
let userInt2 = {
    name: "Mark",
    age: 44,
    greet(greet) {
        return greet + ', ' + this.name + '!';
    },
};
let userInt3 = {
    name: 'John',
    age: 17,
    greet(greet) {
        return `${greet}, ${this.name}!`;
    },
    isAdult() {
        if (this.age < 18) {
            return 'Доступ запрещён';
        }
        else {
            return 'Доступ разрешён';
        }
    },
};
let calc2 = {
    num1: 4,
    num2: 5,
    getSum() {
        return this.num1 + this.num2;
    }
};
let Rectangle3 = {
    height: 200,
    width: 300,
};
// В данном примере мы не указали свойство color. И ошибки при этом нет.
// Можно обратиться к этому свойству и это так же не вызовет ошибку.
// console.log(Rectangle3.color) // undefine
// Можно присвоить значение этому свойству
Rectangle3.color = 'red';
// Или удалить его
delete Rectangle3.color;
let test = {
    test: "a",
    test2: 3
};
// Теперь сделаем функцию на основе этого интерфейса.
let func = function (a, b) {
    return a > b;
};
//===========================================================================
// Интерфейс можно использовать "фрагментарно"(частично)! Для этого, после имени интерфейса указываем его свойство в кавычках и квадратных скобках. 
//===========================================================================
let funcZ1 = (s1, s2) => s1 + ' ' + s2;
let funcZ2 = (num) => {
    let arrDivid = [];
    for (let n = 1; n <= num; n++) {
        if (num % n == 0) {
            arrDivid.push(n);
        }
    }
    return arrDivid;
};
let funcZ3 = (str) => str.split(' ');
let arr = ['a', 'b'];
// Вышеописанным интерфейсом, мы создали индексируемы объект, у которого значением индекса может быть только тип number. А значения только string. По сути, эта запись аналогична типу string[] т.е. массиву строк.
let arrTyp = ['a', 'b', 'c'];
let arrType2 = [1, 2, 3];
// console.log(typeof arrType2) // object
// console.log('it`s arr ' + Array.isArray(arrType2)) //true
console.dir(arrType2); //true
let obj = {
    a: "abc",
    b: 2,
    c: (n) => n ** 2,
    d: (s) => s.toString()
};
console.log(obj.c(3));
console.log(obj.d(3));
let objArr = {
    1: 'a',
    2: 'b',
    3: 'c',
};
console.log(Array.isArray(objArr)); //false
// Вроде всё верно, но....
let objArr2 = ['a', 'b', 'c',];
console.log(Array.isArray(objArr2)); //true
let map = new Map();
console.log(map instanceof Map);
