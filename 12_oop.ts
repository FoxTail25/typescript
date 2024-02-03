// Типизирование классов
class Emploeey { }
let emp: Emploeey = new Emploeey()
// объявление типа свойства класса
// При описании свойств класса необходимо типизировать каждое свойство
// У нас есть класс Studen, у которого 
class Student {
    name: string = "";
    age: number | undefined;
    get() {
        return this.name + " " + this.age
    }
    setName(str: string) {
        this.name = str;
    }
    setAge(num: number) {
        this.age = num;
    }
}
let stud: Student = new Student()
// console.log(stud.get())
stud.setName("John")
stud.setAge(40)
// console.log(stud.get())
//================================================================================================
// Объявление свойств через конструктор
// При объявлении свойств через конструктор их начальные значения можно не задавать. Главное указать их тип
class Emploeey1 {
    name: string;
    surn: string;
    age: number;
    salary: number;

    constructor(str: string, str2: string, age: number, salary: number) {
        this.name = str;
        this.surn = str2
        this.age = age,
            this.salary = salary;
    }
}

let emp1 = new Emploeey1('Mark', 'Bens', 45, 3000)

//=================================================================================================
// Наследование.
// Наследование классов в typeScript происходит так же как и в javaScript

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Emploeey2 extends User {
    salary: number;
    constructor(name: string, sal: number) {
        super(name);
        this.salary = sal;
    }
}
let Emp2 = new Emploeey2('Bill', 4000)

//==============================================================================================
// Модификаторы доступа свойст класса
// В typeScript свойства и методы можно сделать приватными, и защищунными с помощью ключевых слов.
// Всего в typeScript 4 модификатора: public, protected, private, readonly;
// Если при создании класса не указать модификаторы. То все свойства и методы будут публичными и доступными к изменению.

// Модификатор public
// Свойства и методы класса объявленные с модификатором poblic доступны извне для чтения и записи
// Пример:
class User2 {
    public name: string = 'Smith';
    public yearBold: number = 1980;
    public getAge() {
        return new Date().getFullYear() - this.yearBold
    }
}
let us = new User2()
// console.log(us.getAge()) //44

// Модификатор private
// Свойства и методы класса объявленные с модификатором private НЕ доступны извне для чтения и записи. (Даже в потомках). Доступ к этим свойствам и методам доступен только изнутри класса.
// Пример:
class User3 {
    private name: string;
    private age: number;
    private sex: string = 'male';
    sex2: string = "male"
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public getName(): void {
        console.log(this.name)
    }
    public getAge(): void {
        console.log(this.age)
    }
    public setName(name: string) {
        this.name = name;
    }
    public setAge(age: number) {
        this.age = age;
    }
    public getSex(): void {
        console.log(this.sex)
        console.log(this.name)
    }
}
let us3 = new User3('Max', 40)
// us3.getName()
// us3.getAge()
us3.setName('Born')
us3.setAge(30)
// us3.getName()
// us3.getAge()

class User4 extends User3 {

}
let us4 = new User4('Mila', 35)
// us4.getAge()
// us4.getSex()

// Модификатор protected
// ?!?!?__Приватные свойства и методы не наследуются потомкамт__?!?! 
// Иногда нам нужно что бы свойства и методы были недоступны снаружи класса, но при этом наследовались потомками. В таких случаях используется модификатор protected

class User5 {
    protected cape(str: string) {
        return str[0].toUpperCase() + str.slice(1)
    }
}

// Сдулаем класс student наследуемый от класса user

class Student2 extends User5 {
    private name: string;
    constructor(name: string) {
        super();
        this.name = name
    }
    public showName(): void {
        console.log(this.cape(this.name))
    }
}
let stud2 = new Student2('john');
// stud2.showName()

// Задача
// Дан следующий класс:

class User22 {
    protected name: string;
    protected surn: string;
    public level: string = 'midle';

    constructor(name: string, surn: string) {
        this.name = name;
        this.surn = surn;
    }

}

let us22 = new User22('run', 'bun')
// Унаследуйте от этого класса класс Employee, который добавит защищенное свойство salary, а также геттеры всех свойств, как своих, так и унаследованных.

class Emploeey22 extends User22 {

    protected salary: number = 3000;

    constructor(name: string, surn: string, salary?: number) {
        super(name, surn); // super по сути является конструктором предка(родителя)
        if (salary) { // т.к. переменная salary в конструкторе указана как необязательная (salary?:). поставим ветвление, которое будет срабатывать только если переменная salary получит значение
            this.salary = salary
        }
    }
    getName(): void {
        console.log(this.name)
    }
    getSurn(): void {
        console.log(this.surn)
    }
    getSal(): void {
        console.log(this.salary)
    }
}
let emp22 = new Emploeey22('Bin', 'red', 5000)
// emp22.getSal()
// console.log(emp22.level)


// Модификатор readonly
// С помощью модификатора readonly свойства можно сделать доступными только для чтения.
class User6 {
    readonly name: string;
    readonly age: number;
    constructor(name: string, age: number) {
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
    private name: string = '';
    private age: number = NaN;

    public set _name(name: string) {
        this.name = name;
    }
    public get _name() {
        return this.name
    }

    public set _age(age: number) {
        this.age = age;
        if (0 < age && age < 120) {
            this.age = age;
        } else {
            console.log('warning wrong age');
        }
    }
    public get _age() {
        return this.age
    }
}

//======================================================================================================================================
// Статические свойства. 
// В typeScript можно делать свойства которые будут принадлежать классу а не объекту. Такие свойства называются статическими(static). Статические свойства можно вызывать без создания объекта. Просто обратившись к классу в котором они объявленны. Для того, что бы сделать свойство статическим, нужно полсле объявления модификатора написать ключевое слово static.
// Пример:
class User8 {
    public name: string; //1) свойство name нельзя сделать статическим. т.к. они будет конфликтовать со встроенным свойством name
    public static salary: number = 2000;
    constructor(name: string) {
        this.name = name;
    }
    setSalary(sal: number) {
        User8.salary = sal
    }
}
// console.log(User8.salary) // 2000

class Student3 extends User8 {
    public static speciality: string = 'programmer'

    constructor(name: string) {
        super(name);
        this.name = name;
        Student3.salary = Student3.salary + 500
    }
}

// Статические свойства принадлежат конструктору класса и будут общими для всех объектов этого класса! НО!! При наследовании класса. Статические свойства будут отилчаться. Т.е. У родительского класса будут свои статические метод(ы), а у его потомков свои!!

//===========================================================================================================================================

// Статические методы класс
// Статическими могут быть не только свойства но и методы. Такие методы, так же как и свойства можно вызывать без объявления класса.
// Пример:

class Calc0 {
    static getSum(arr: number[]): number {
        return arr.reduce((acc, el) => acc += el, 0)
    }
    static getSumSquare(arr: number[]): number {
        return arr.reduce((acc, el) => acc += el ** 2, 0)
    }
    static getSumQube(arr: number[]): number {
        return arr.reduce((acc, el) => acc += el ** 3, 0)
    }
}
// console.log(Calc0.getSum([1, 2, 3]))
// console.log(Calc0.getSumSquare([1, 2, 3]))
// console.log(Calc0.getSumQube([1, 2, 3]))

// Абстрактные ООП классы в typeScript
// Если нам необходим класс, содержащий общие свойства и методы. И от него мы будем наследовать классы потомков. При этом мы не будем создавать экзепляров класс. Что бы явно запретить создавать экземпляры класса, такой класс объявляется абстрактным. Для этого используется ключевое слово abstract.
// Пример

abstract class UserAbs {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// let usA = new UserAbs('Mark') // Такая запись прведёт к ошибке т.к. невозможно создать экзепляр абстрактного класса!

class studAbs extends UserAbs { // но мы можем использовать класс UserAbs для наследования.
    public course: number;
    constructor(name: string, course: number) {
        super(name)
        this.course = course;
    }
}
let stA = new studAbs('studs', 5)
// console.log(stA.name) // studs
// console.log(stA.course) // 5
// ==========================================================================================================================================
// Задача: Создайте абстрактный класс Figure, представляющий собой геометрическую(четырёхстороннюю) фигуру. Пусть в нем будут свойства для периметра и площади.

abstract class FugureA {
    protected sideA: number;
    protected sideB: number;
    constructor(a: number, b: number) {
        this.sideA = a;
        this.sideB = b;
    }
    getSquare() {
        console.log(this.sideA * this.sideB)
    }
    getPerimetr() {
        console.log((this.sideA + this.sideB) * 2)
    }
}

// Сделайте класс Square, наследующий от класса Figure.

class Square extends FugureA { }
let sqrt = new Square(2, 2)
// sqrt.getSquare() //4
// sqrt.getPerimetr() //8

//Сделайте класс Rectangle, наследующий от класса Figure.

class Rectangle extends FugureA { }
let rect = new Rectangle(3, 4)
// rect.getSquare() //12
// rect.getPerimetr() //14

// =========================================================================================================================================
// Адстрактные методы в ООП typeScript
// Бывает так, что у классов-потомков должен быть общий метод, однако, реализация этого метода зависит от конкретного потомка. В этом случаке этот метод можно  объявить в абстрактном классе родителя, не написав его реализаци. И тогда потомки обязаны реализовать этот метод. Такие методы называются абстрактными и так же объявляются с помощью ключевого слова abstract.

// Пример:
abstract class PeoplA {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract show(): string;
}

class Employee_PA extends PeoplA {
    salary: number;
    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary
    }
    show(): string {
        return `${this.name} ${this.salary}`
    }
}

// Задача: В абстрактном классе Figure сделайте абстрактные методы для получения площади и периметра.

abstract class FugureA2 {
    protected sideA: number;
    protected sideB: number;
    constructor(a: number, b: number) {
        this.sideA = a;
        this.sideB = b;
    }
    abstract getSquare(): number;
    abstract getPerimetr(): number;
}

class Sqrt2 extends FugureA2 {
    constructor(a: number, b: number) {
        super(a, b)
    }
    getSquare(): number {
        let square = this.sideA * this.sideB
        console.log(square)
        return square
    }
    getPerimetr(): number {
        let perimetr = (this.sideA + this.sideB) * 2
        console.log(perimetr)
        return perimetr
    }
}

class Rectangle2 extends FugureA2 {
    constructor(a: number, b: number) {
        super(a, b)
    }
    getSquare(): number {
        let square = this.sideA * this.sideB
        console.log(square)
        return square
    }
    getPerimetr(): number {
        let perimetr = (this.sideA + this.sideB) * 2
        console.log(perimetr)
        return perimetr
    }
}

//===========================================================================================================================================


//===========================================================================================================================================
// Интерфейсы в ООП
// Интерфейсы объявляются ключевым словом interface. Что бы избежать конфликтов имен. Имена интерфейсво принято называть с заглавной буквы "I"
// Пример 
interface IUser {
    name: string;
    age: number;
}
// Теперь мы можем создать объект с заданными свойствами (и их типами)
let userInt: IUser = {
    name: 'John',
    age: 30
}
// Изменение типа свойств, имени свойст или добавление и удаление свойств данного объекта будет приводить к ошибке.

// Задача 1
// Создайте интерфейс IMath со свойствами num1 и num2.
interface IMath {
    num1: number;
    num2: number;
}
// Задача 2
// Реализуйте объект calc созданного выше интерфейса.
let calc: IMath = {
    num1: 5,
    num2: 7
}
//===========================================================================================================================================
// Методы интерфейсов
// В интерфейс так же можно добавлять методы объектов. Для этого нужно задать имя метода, тип параметров и тип возвращаемого значения.
interface IUser2 {
    name: string;
    age: number;
    greet(greet: string): string;
}
// Реализуем наш метод в объекте:
let userInt2: IUser2 = {
    name: "Mark",
    age: 44,
    greet(greet: string) {
        return greet + ', ' + this.name + '!'
    },
}

console.log(userInt2.greet('Hello'))

// Задача 1
// Для интерфейса IUser3, реализуйте метод для проверки возраста. Если возраст юзера меньше 18, пусть отобразится сообщение о том, что доступ запрещен.

interface IUser3 {
    name: string;
    age: number;
    greet(greet: string): string;
    isAdult(): string;
}
let userInt3: IUser3 = {
    name: 'John',
    age: 17,
    greet(greet: string) {
        return `${greet}, ${this.name}!`
    },
    isAdult() {
        if (this.age < 18) {
            return 'Доступ запрещён'
        } else {
            return 'Доступ разрешён'
        }
    },
}

// Задача 2
// Создайте интерфейс IMath со свойствами num1 и num2, а также методом getSum, который будет суммировать оба числа.
interface IMath2 {
    num1: number;
    num2: number;
    getSum(): number;
}
let calc2: IMath2 = {
    num1: 4,
    num2: 5,
    getSum() {
        return this.num1 + this.num2
    }
}
