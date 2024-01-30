// Встроенные типы данных. В JavaScript существует много встроенных классов имеющих свой тип для объектов. Среди них: Дата, регулярные выражения, DomЭлементы(HTMLElement), Map, Set, Promis.

// объект Date

let date = new Date();
// Если навести стрелку мыши на переменную date, то во вплывающей подсказке мы увидим что она имеет тип Date.
let date2: Date = new Date(2024, 0, 29);

// Регулярное выражение
let reg = new RegExp('.+?');
// Если навести стрелку мыши на переменную reg, то во вплывающей подсказке мы увидим что она имеет тип RegExp. Укажем его вручную.
let reg2: RegExp = new RegExp('.+?');


// DomЭлементы
// Все HTMLElement`ы являются производными от HTMLElement.
let elem = document.querySelector('div');
// Если навести стрелку мыши на переменную elem, то во вплывающей подсказке мы увидим что она имеет тип HTMLDivElement | null.
// Пропишем его вручную:
let div: HTMLDivElement | null = document.querySelector('div');
console.dir(div);

// Задача: Создать переменную в которой будет находится Promise
let prom = new Promise((res, rej) => {
    res('ok')
});
prom.then(res => res);
// Если навести стрелку мыши на переменную prom, то во вплывающей подсказке мы увидим что она имеет тип Promise<unknown>. Укажем его вручную.
// вместо <unknown> пропишем <string>, т.к. функция res, в нашем случае возвращает строку.
let prom2: Promise<string> = new Promise((res, rej) => {
    let err: boolean = true;
    if (!err) {
        res('ok');
    } else {
        rej('error');
    }

})
prom2.then(res => cl(res)).catch(err => cl(err));

function cl(data: any): void {
    console.log(typeof data, ' ', data)
}
// В угловых скобках "<>" мы указывает типо возращаемого значения. (То, что нам вернёт функция res) Тип возращаемого значения функции rej указывать не обязательлно.
//===========================================================================================================================================
// Создать переменную содержащую ссылку на параграф и ненумерованный список.
let domelem = document.createElement('p');

let ul = document.createElement('ul')




