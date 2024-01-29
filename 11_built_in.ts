// Встроенные типы данных. В JavaScript существует много встроенных классов имеющих свой тип для объектов. Среди них: Дата, регулярные выражения, DomЭлементы(HTMLElement), Map, Set, Promis.

// объект Date

let date = new Date();
date = new Date(2024, 0, 29);
// Если навести стрелку мыши на переменную date то во вплывающей подсказке мы увидим что она имеет тип Date.

// Регулярное выражение
let reg = new RegExp('.+?');
// Если навести стрелку мыши на переменную reg то во вплывающей подсказке мы увидим что она имеет тип RegExp. Укажем его вручную.
let r: RegExp = new RegExp('.+?');


// DomЭлементы
// Все HTMLElement`ы являются производными от HTMLElement.
let elem = document.querySelector('div');
// Если навести стрелку мыши на переменную elem то во вплывающей подсказке мы увидим что она имеет тип HTMLDivElement | null.
// Пропишем его вручную:
let div: HTMLDivElement | null = document.querySelector('div');
console.dir(div)

// Задача: Создать переменную в которой будет находится Promise
let prom = new Promise((res, rej) => {
    res('ok')
})
prom.then(res => console.log(res))