"use strict";
// При объявлении параметра функций мы так же можем указать их тип.
function func1(a, b) {
    console.log(a + b);
}
func1(1, 2);
// так же мы можем указать тип возвращаемого значения
function func2(a, b) {
    console.log(a + b);
    return a + b;
}
func2(1, 2);
// Бывают функции, которые ничего не возвращают. В этом случае в качестве результата им указывают ключевое слово void
function func3(a, b) {
    console.log(a + b);
}
func3(1, 2);
// Практика: указать тип принимаемого и возвращаемого значения.
// Задача 1
// function sum(x, y) {
// 	return x + y;
// }
// Вариант 1:
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
function sum2(x, y) {
    return x + y;
}
console.log(sum2(1, 2));
//==================================================================
// Задача 2
// function sum(arr) {
//     let res = 0;
//     for (let num of arr) {
//         res += num;
//     }
//     return res;
// }
// Вариант 1
function sum3(arr) {
    let res = 0;
    for (let num of arr) {
        res += num;
    }
    return res;
}
function sum4(arr) {
    let res = 0;
    for (let num of arr) {
        res += num;
    }
    return res;
}
// Задача 3 указать тип  возвращаемого значения.
// function func(text: string) {
// 	console.log(elem);
// }
function func(text) {
    console.log(text);
}
