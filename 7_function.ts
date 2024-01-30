// При объявлении параметра функций мы так же можем указать их тип.
function func1(a: number, b: number) {
    console.log(a + b)
}
// func1(1, 2)

// так же мы можем указать тип возвращаемого значения
function func2(a: number, b: number): number {
    console.log(a + b)
    return a + b
}
// func2(1, 2)

// Бывают функции, которые ничего не возвращают. В этом случае в качестве результата им указывают ключевое слово void
function func3(a: number, b: number): void {
    console.log(a + b)
}
// func3(1, 2)

// Практика: указать тип принимаемого и возвращаемого значения.
// Задача 1
// function sum(x, y) {
// 	return x + y;
// }
// Вариант 1:
function sum(x: number, y: number): number {
    return x + y;
}
// console.log(sum(1, 2))
// Вариант 2:
type n = number;
function sum2(x: n, y: n): n {
    return x + y;
}
// console.log(sum2(1, 2))
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

//================================================================
// Необязательные параметры функции
// Для того что бы сделать параметр необязательным, после него нужно поставить знак вопроса.
// Пример 
function func4(num1: number, num2?: number): number {
    if (num2) { // Если num2 будет указан, то сработает эта ветка
        return num1 + num2
    } else { // Если num2 не указать то сработает эта ветка
        return num1
    }
}

// Задача: Сделайте функцию, которая принимает параметрами день, месяц и год, и возвращать день недели, соответствующий этой дате. Пусть все три параметра будут не обязательными. Если какой-то параметр не передан, он должен принять значение, соответствующее текущей дате.

function getWeekDay(day_in?: number, month_in?: number, year_in?: number): string {
    let day: number, month: number, year: number;

    if (!day_in) {
        day = new Date().getDate()
    } else {
        day = day_in
    };

    if (!month_in) {
        month = new Date().getMonth()
    } else {
        month = month_in - 1
    };

    if (!year_in) {
        year = new Date().getFullYear()
    } else {
        year = year_in
    };
    let date: Date = new Date(year, month, day)
    let weekDay = date.toLocaleString('ru-RU', { weekday: 'long' })
    console.log(date.toLocaleDateString('ru-RU', { day: "2-digit", month: "long", year: "2-digit" }))

    return weekDay
}
// console.log(getWeekDay())
//==============================================================================
// Заданные значения для необязательных параметров.
// Можно задавать значения по умолчанию для параметров функции. В таком случае знак вопроса после параметра не ставится.
// Пример:
function test2(str1: string, str2: string | number = '!') {
    return str1 + str2
}
// console.log(test2('a'))
// console.log(test2('a', 2))
// console.log(test2('a', 'b'))

// Задача: Сделайте функцию, которая будет возводить число в заданную степень. Пусть первым параметром функция принимает число, а вторым - степень. Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.
function getDegreeNum(num1: number, degree = 2): void {
    console.log(num1 ** degree)
}
// getDegreeNum(2)
// getDegreeNum(2,3)
//=============================================================================
// rest параметры в функции
// Для того, что бы передать rest параметры в функцию, переменную в которые будут попадать параметры нужно указать массивом.
//Пример:
function sum22(...r: (string | number)[]): void {
    let result: (string | number)[] = [];
    r.forEach(e => result.push(e))
    console.log(result)
}
// sum22('a',2,5,7,'b')
// Задача: Сделайте функцию, которая параметрами принимает любое количество чисел, а возвращает их сумму.
function sum01(...n: number[]): number {
    return n.reduce((acc, el) => acc += el, 0)
}
// console.log(sum01(1, 2, 3))

//=============================================================================
// Тип функции
// В JavaScript функции могут храниться в переменных. В таких случаях typeScript позволяет нам указать что эта переменная имеет тип "функция". Тип функции представляет собой комбинацию типов, параметров и типа возвращаемого значения. Эта комбинация называется сингатурой функции.

// Что бы указать переменной тип функции, нужнов круглых скобках перечислить параметры и их типы, а после стерлки => указать тип возвращаемого значения.
// Пример


// let Sfunc: (num1: number, num2: number) => number;
let Sfunc: (num1: number, num2: number) => number = function (a: number, b: number): number {
    return a + b
}
// console.log(Sfunc(2, 3))
// Задача
// Укажите переменной тип функции:

let func5: (a: string) => void = function (text: string): void {
    alert(text);
};
//=============================================================================
// Свой тип с функцией в typeScript
type Sfunc1 = (x: number, y: number) => string;
let sumNumToStr: Sfunc1 = function (a, b) {
    return String(a + b)
}
let answer = sumNumToStr(27, 3)
// console.log(typeof answer, answer)

// Задача 1
//Сделайте функцию данного типа. Пусть функция параметром получает три числа, а своим результатом возвращает сумму этих чисел.
type SFunc2 = (x: number, y: number, z: number) => number;
let sum3num: SFunc2 = (a, b, c) => a + b + c;
// console.log(sum3num(1,2,3))
// Задача 2
// Объявите тип функции, параметром принимающей число и массив чисел, а результатом возвращающий массив чисел.
type SFuncNum_and_arr = (n: number, a: number[]) => number[];
let arrNumAddNum: SFuncNum_and_arr = (num, arr) => {
    arr.push(num);
    return arr
}
// console.log(arrNumAddNum(1, [3, 2]))

let arrSubstructNum: SFuncNum_and_arr = (num, arr) => {
    if (arr.includes(num)) {
        return arr.filter(el => el != num)
    } else {
        return [...arr]
    }
}
// console.log(arrSubstructNum(3, [3, 4, 5]))
// console.log(arrSubstructNum(1, [3, 4, 5]))

let func2234 = (num1: number, num2: number): number => num1 + num2;

let func4322 = (str: string): string[] => str.split('');

let arr: number[] = [1, 2, 3];
let res: number[] = arr.map(num => num ** 2);

console.log(res);
