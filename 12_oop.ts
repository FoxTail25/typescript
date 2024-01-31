// Типизирование классов
class Emploeey { }
let emp: Emploeey = new Emploeey()
// объявление типа свойства класса
// При описании свойств класса необходимо типизировать каждое свойство
// У нас есть класс Studen, у которого 
class Student {
    name: string | undefined
}
let stud: Student = new Student()
console.log(stud.name)
stud.name = 'John'
console.log(stud.name)