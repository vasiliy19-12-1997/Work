//========================================================================================================================================================
//========================================================================================================================================================

/*
Итак, простое число в JS можно записать следующим образом.
*/

/*
// Число
let someNum = 458;
console.log(someNum);

// Десятичные числа
let someNums = 4.58;
console.log(someNums);
*/

/*
let someBigNum = 1000000;
console.log(someBigNum);

let someBigNum = 1e6; // 1 * 1000000;
console.log(someBigNum);


let someLittleNum = 0.000001;
console.log(someLittleNum);

let someLittleNum = 1e-6; // 1 / 1000000;
console.log(someLittleNum);
*/
//=========================================================================

//Шестнадцатеричные, двоичные и восьмеричные числа

/*
Шестнадцатеричные числа широко используются в JavaScript
для представления цветов, кодировки символов и многого другого.
*/
/*
console.log(0xFF); // = 0xff = 255

// Реже используются двоичные и восьмеричные числа

console.log(0b11111111); // 255
console.log(0o377); // 255

// Метод toString(base)
// Метод num.toString(base) возвращает строковое
// представление числа в той или иной системе счисления (base).
// base может принимать значения от 2 до 36 (по умолчанию 10).

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));
*/

//=========================================================================
// Округление чисел

// В JavaScript встроен объект Math, который содержит 
// несколько функций для работы с округлением:
/*
// Math.floor - Округление в меньшую сторону

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

*/

/*
// Math.ceil - Округление в большую сторону

let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
// Math.round - Округление до ближайшего целого

let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
let numOne = Math.round(5.845);
console.log(numOne); // 6
*/

// Как нам получить 5.8 или 5.85 ?

/*
// Способ умножения и деления

let numOne = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
console.log(numOne);


let numTwo = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(numTwo);


let numThree = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
console.log(numThree);
*/

//=========================

/*
// Метод toFixed(n) - округляет число до n знаков после запятой
// и возвращает строковое представление результата.

let numOne = 5.845;
console.log(numOne.toFixed(1));

// Преобразовать в число
console.log(+numOne.toFixed(1));
console.log(Number(numOne.toFixed(1)));
*/

//=========================


// Проблема неточных вычислений
/*
let numOne = Math.round(1.005 * 100) / 100; // Ожидаем 1.01
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1)); // Ожидаем 12.4



let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);
*/

// О том почему так происходит читай по ссылке в описании


/*
// Решение с помощью Number.EPSILON

let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

// Функцию которая корректирует округление
// десятичных дробей можно найти по ссылке описании
*/

//=========================================================================

//Проверка: isFinite и isNaN
/*
Напомню, что существуют специальные числовые значения
такие как Infinity - бесконечность и NaN - ошибка вычисления
Эти значения так же являются типом данных number
но не являются обычными числами.
Для проверки таких значения существуют специальные функции
*/

// Проверка isNaN
/*
console.log(Number(25 + "Привет!"));
console.log(isNaN(25 + "Привет!"));

if (25 + "Привет!" !== NaN) {
	console.log('Я не NaN');
}

console.log(NaN === NaN);
*/


// Проверка isFinite
/*
преобразует аргумент в число и возвращает true,
если оно является обычным числом
*/
/*
console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
*/
//=========================================================================
//parseInt и parseFloat
/*
Как мы уже знаем, преобразовать строку в число можно
с помощью унарного оператора сложения либо специальной функции Number.
*/
/*
let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);
*/
/*
Но, мы очень часто сталкиваемся со значениями
у которых есть единица измерения, например
*/
/*
let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);
*/
//=====================


/*
Для получения чисел из такой строки существуют parseInt и parseFloat.
Если в процессе чтения возникает ошибка, они возвращают полученное до
ошибки число.

Функция parseInt возвращает целое число, а parseFloat
возвращает число с плавающей точкой:
*/
/*
let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);


let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/
/*
let valueTwo = parseFloat("a150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/

/*
Функция parseInt() имеет необязательный второй параметр.
Он определяет систему счисления, таким образом parseInt
может также читать строки с шестнадцатеричными числами,
двоичными числами и т.д.:
*/
/*
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));
*/


//=========================================================================
// Другие возможности

// Уже знакомый нам объект Math, одержит 
// различные математические функции и константы. 
// Вот некоторые из них:



//Math.random()
//Возвращает псевдослучайное число в 
//диапазоне от 0(включительно) до 1(но не включая 1)
/*
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

/*
//Math.max(a, b, c...) / Math.min(a, b, c...)
//Возвращает наибольшее/наименьшее число из перечисленных аргументов.

console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));
*/

/*
//Math.abs()
//возвращает абсолютное значение (модуль) числа.

let num = -58;
console.log(Math.abs(num));
*/



/*
//Math.pow(n, power)
//Возвращает число n, возведённое в степень power

console.log(Math.pow(5, 8));
*/

// Больше функций Math смотри по ссылке в описании



//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1. Получить верное значение округления
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); // Выведет 1 что не верно

// Задача №2. Получить число 135.58 из строки
let value = "135.58px";

// Задача №3. Посттроить верное условное ветвление
let value = 58 + "Фрилансер";
if (написать ответ) {
	console.log('Результат выражения NaN');
}

// Задача №4.
// Найти максимальное число из 10,58,39,-150,0

// Задача №5.
// Округлить число 58.858 до числа 58
*/


