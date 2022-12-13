// console.log(typeof ("" + 1 + 0));
// ("1");
// console.log(typeof ("" - 1 + 0));
// -1;
// console.log(typeof +false);
// 0;
// console.log(typeof (6 / "3"));
// 2;
// console.log(typeof ("2" * "3"));
// 6;
// console.log(typeof (4 + 5 + "px"));
// ("9px");
// console.log(typeof ("$" + 4 + 5));
// ("$45");
// console.log(typeof ("4" - 2));
// 2;
// console.log(typeof ("4px" - 2));
// NaN;
// console.log(typeof ("  -9  " + 5));
// ("-9 5");
// console.log(typeof ("  -9  " - 5));
// -14;
// console.log(typeof (null + 1));
// 1;
// console.log(typeof (undefined + 1));
// NaN;
// console.log(typeof (" \t \n" - 2));
// -2;

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(+false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log("  -9  " + 5);
// console.log("  -9  " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(" \t \n" - 2);

// let a = ("Первое число?", 1);
// let b = ("Второе число?", 2);
// console.log(+a + +b);

// let result = 5 > 2;
// console.log(result);

// 5 > 4 true
// "ананас" > "яблоко" false
// "2" > "12" true
// undefined == null true
// undefined === null  false
// null == "\n0\n" false
// null === +"\n0\n" false

// let year = 2020;
// if (year > 2015) {
//   console.log("плохо");
// } else if (year < 2015) {
//   console.log("еще раз плохо");
// } else {
//   console.log("верно");
// }
// let age = 18;
// let acsessAlowed = age >= 18 ? true : false;
// console.log(acsessAlowed);

// let age = 18

// let message = (age < 3) ? 'малыщ' :
// (age < 18) ? 'Hello' :
// (age >100) ? 'старый' :
// 'Какой возраст';

// console.log( message );

// let age = 99;
// if (age < 3) {
//   console.log("малыш");
// } else if (age < 18) {
//   console.log("Hello");
// } else if (age < 100) {
//   console.log("HELLO");
// } else {
//   console.log("Какой необычный возраст");
// }

// let message = "Vasya";
// if ((message === "ECMAScript")) {
//   console.log("You are absolutely rigth!!");
// } else {
//   console.log("Не знаете? ECMAScript!");
// }

// let a = 1;
// let b = 2;
// let result = a + b < 4 ? console.log("Malo") : "Mnogo";
// let login = "Vasya";
// let message =
//   login === "Сотрудник"
//     ? console.log("Hello")
//     : login === "Директор"
//     ? console.log("Здравствуйте")
//     : login === ""
//     ? console.log("Нет логина")
//     : console.log("");

// let age = 10;
// if (age >= 14 && age <= 90) {
//   console.log("KRUTO");
// }
// if (!(age >= 14 && age <= 90)) {
//   console.log("NE KRUTO");
// }
// if (age <= 14 || age >= 90) {
//   console.log("NE KRUTO");
// }
// //   console.log("KRUTO");
// let login = "Admin";
// if (login === "Admin") {
//   console.log("Welcome");
// } else if (login === "Я главный") {
//   console.log("Здравствуйте!");
// } else {
//   console.log("Goodbya");
// }

// let a = "Vasya";

// if (a === "Edge") {
//   alert("Youve got the Edge!");
// } else if (
//   a === "Chrome" ||
//   a === "Firefox" ||
//   a === "Safari" ||
//   a === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// let a = 0;
// switch (a) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");

//     break;
//   default:
//     break;
// }
// function show(a, b) {
//   alert(`${a} + ${b}`);
// }
// show("vasya", "nikita");

// let x = 5 ** 3;
// console.log(x);
// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", "");
//   if (!value) break;
//   sum += value;
//   console.log(sum);
// }
// let a = 0.1;
// let b = 0.3;
// let c = a + b;
// console.log(c);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// function saleHotdogs(n) {
//   if (n < 5) {
//     return n * 100;
//   } else if (n >= 5 && n < 10) {
//     return n * 95;
//   } else if (n >= 10) {
//     return n * 90;
//   }
// }

// const { assert } = require("chai");

// describe("Tests", () => {
//   it("Sample tests", () => {
//     assert.strictEqual(saleHotdogs(1), 100);
//     assert.strictEqual(saleHotdogs(4), 400);
//     assert.strictEqual(saleHotdogs(5), 475);
//     assert.strictEqual(saleHotdogs(9), 855);
//     assert.strictEqual(saleHotdogs(10), 900);
//     assert.strictEqual(saleHotdogs(100), 9000);
//   });
// });
console.log(0.1 + 0.33);

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop());
