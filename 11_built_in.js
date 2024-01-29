"use strict";
// Встроенные типы данных. В JavaScript существует много встроенных классов имеющих свой тип для объектов. Среди них: Дата, регулярные выражения, DomЭлементы(HTMLElement), Map, Set, Promis.
// объект Date
let date = new Date();
// Если навести стрелку мыши на переменную date то во вплывающей подсказке мы увидим что она имеет тип Date.
date = new Date(2024, 0, 29);
// Регулярное выражение
let reg = new RegExp('.+?');
// Если навести стрелку мыши на переменную reg то во вплывающей подсказке мы увидим что она имеет тип RegExp.
// DomЭлементы
// Все HTMLElement`ы являются производными от HTMLElement.
let div = document.querySelector('div');
console.dir(div);
