// Рекурсивные функции
function getFactorial(n){
    if (n===1){
        return 1;
    }else{
        return n*getFactorial(n-1);
    }
}
let result = getFactorial(4);
console.log(result);
// Вот так мы получаем 24
// let(result) = 4*getFactorial(3);
// let(result) = 4*3*getFactorial(2);
// let(result)  = 4*3*2*getFactorial(1);
// let(result) = 4*3*2*1;//24

// Рассмотрим другой пример - определение чисел Фибоначчи:

function getFibonachi(n) {
    if (n===0){
        return 0; 
    }if (n===1){
        return 1;
    }else{
        return getFibonachi(n-1) + getFibonachi(n-2);
    }
}
let resultNew = getFibonachi(8);
console.log(resultNew);
// получаем getFibonachi(7) + getFibonachi(6)
// раскладываем далее функции еще
// getFibonachi(6) + getFibonachi(5)

// Переопределение функций
function display(){
    console.log('Доброе утро');
    display = function(){
        console.log('Добрый день');
    }
}
// присвоение ссылки на функцию до переопределения
let displayMessage = display;
display();
display();
displayMessage();
displayMessage();

// Hoisting
// Hoisting представляет процесс доступа к переменным до их определения. Возможно, данная концепция выглядит немного странно, но она связана с работой компилятора JavaScript. Компиляция кода происходит в два прохода. При первом проходе компилятор получает все объявления переменных, все идентификаторы. При этом никакой код не выполняется, методы не вызываются. При втором проходе собственно происходит выполнение. И даже если переменная определена после непосредственного использования, ошибки не возникнет, так как при первом проходе компилятору уже известны все переменные.

// То есть как будто происходит поднятие кода с определением переменных и функций вверх до их непосредственного использования. Поднятие на английский переводится как hoisting, сообственно поэтому данный процесс так и называется.

// Переменные, которые попадают под hoisting, получают значение undefined.

// Например, возьмем следующий простейший код:
// console.log(foo);//foo is not defined
// console.log(foo);
// var foo = 'Vasya';//undefiend

display();
function display(){
    console.log('Hello Vasya');
}
// Передача параметров по значению

function change(x){
    x = 2 * x;
    console.log(x);
}
let x = 10;
change(x);
console.log(x);
// Когда вызываем функцию значение меняется, а если просто вызываем то само значение остается
