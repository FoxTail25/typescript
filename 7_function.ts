// При объявлении параметра функций мы так же можем указать их тип.
function func1(a: number, b: number) {
    console.log(a + b)
}
func1(1, 2)

// так же мы можем указать тип возвращаемого значения
function func2(a: number, b: number): number {
    console.log(a + b)
    return a + b
}
func2(1, 2)

// Бывают функции, которые ничего не возвращают. В этом случае в качестве результата им указывают ключевое слово void
function func3(a: number, b: number): void {
    console.log(a + b)
}
func3(1, 2)

// Практика: указать тип принимаемого и возвращаемого значения.
// Задача 1
// function sum(x, y) {
// 	return x + y;
// }
// Вариант 1:
function sum(x: number, y: number): number {
    return x + y;
}
console.log(sum(1, 2))
// Вариант 2:
type n = number;
function sum2(x: n, y: n): n {
    return x + y;
}
console.log(sum2(1, 2))
//===========================================================================================================================================
// Задача 2
// function sum(arr) {
//     let res = 0;

//     for (let num of arr) {
//         res += num;
//     }

//     return res;
// }
// Вариант 1
function sum3(arr: number[]): number {
    let res: number = 0;
    for (let num of arr) {
        res += num;
    }
    return res;
}
// Вариант 2
type num = number;
function sum4(arr: num[]): num {
    let res: num = 0;
    for (let num of arr) {
        res += num;
    }
    return res;
}
// Задача 3 указать тип  возвращаемого значения.
// function func(text: string) {
// 	console.log(elem);
// }
function func(text: string): void {
    console.log(text);
}
//============================================================================================================================================
// Количесвто параметров в функции
// При вызове функции в typeScript в неё должно передаваться ровно столько значений, сколько в ней определено параметров.

function func22(first: string, last: string) {
    return first + ' ' + last;
}
//Вызовем нашу функцию с разным количеством параметров:

//func22('john');               // ошибка, мало параметров
//func22('john', 'smit', 'xx'); // ошибка, много параметров
func22('john', 'smit');       // работает