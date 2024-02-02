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
    sex2: string = "fuck"
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
us3.getName()
us3.getAge()
us3.setName('Born')
us3.setAge(30)
us3.getName()
us3.getAge()

class User4 extends User3 {

}
let us4 = new User4('Mila', 35)
us4.getAge()
us4.getSex()
