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
console.log(stud.get())
stud.setName("John")
stud.setAge(40)
console.log(stud.get())
//================================================================================================
// Объявление свойств через конструктор
// При объявлении свойств через конструктор их начальные значения можно не задавать. Главное указать их тип
class Emploeey1 {
    name: string;
    surn: string;
    age: number;
    salary: number;

    constructor(str: string, str2:string, age: number, salary: number) {
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
    constructor(name: string, sal:number) {
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


