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
// console.log(0.1 + 0.33);

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// let arr = Array.from(arrayLike); // (*)
// console.log(arr.pop());

// let salaries = {};

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let value of Object.values(salaries)) {
//     sum += value;
//   }
//   console.log(sum);
// }
// sumSalaries(salaries);

// let user = {
//   name: "John",
//   age: 30,
// };

// function count(obj) {
//   return Object.keys(obj).length;
// }
// console.log(count(user));

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };
// let { title, width, height } = options;

// console.log(title);

// let user = {
//   name: "John",
//   years: 30,
//   isAdmin: true,
// };
// let { name, years: age, isAdmin = false } = user;
// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (const value of Object.values(salaries)) {
//     sum += value;
//   }
//   console.log(sum);
// }
// sumSalaries(salaries);

// let user = {
//   name: "John",
//   age: 30,
//   health: "very good",
// };

// function count(obj) {
//   console.log(Object.keys(obj).length);
// }
// count(user);

// let user = {
//   name: "John",
//   years: 30,
// };
// let { name, years: age, isAdmin = false } = user;
// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin );

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// function topSalary(salaries) {
//   let a = 0;
//   let maxName = "";
//   for (const [name, salary] of Object.entries(salaries)) {
//     if (a < salary) {
//       a = salary;
//       maxName = name;
//     }
//   }
//   console.log(maxName);
// }
// topSalary(salaries);

// let now = new Date();
// now.setDate(now.getDate() + 2)
// console.log(now);

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// alert("Время diffSubtract: " + bench(diffSubtract) + "мс");
// alert("Время diffGetTime: " + bench(diffGetTime) + "мс");

// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// let a = JSON.parse(JSON.stringify(user));
// console.log(a);

// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   }
//   return n + sumTo(n - 1);
// }

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumTo(n) {
//   return (n * (n + 1)) / 2;
// }

// function factorial(n) {
//   return n === 1 ? 1 : n * factorial(n - 1);
// }

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// let str = "Привет";
// console.log(Array.from(str));
// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     console.log(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work();

// function f() {
//   let value = 123;

//   function g() {
//     alert(value);
//   }

//   return g;
// }

// let g = f(); // пока g существует,
// // соответствующее лексическое окружение существует
// g = null;

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1

// console.log( counter2() ); // ?
// console.log( counter2() );

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log(counter.up()); // ?
// console.log(counter.up()); // ?
// console.log(counter.down());

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// console.log(arr.filter(inBetween(3, 6)));
// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inArray(arr) {
//   return function (x) {
//     for (let value of arr) {
//       if (x === value) {
//         return value;
//       }
//     }
//   };
// }

// console.log(arr.filter(inArray([1, 2, 10])));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(field) {
//   return (a, b) => (a[field] > b[field] ? 1 : -1);
// }

// users.sort(byField("name"));
// users.forEach((user) => console.log(user.name));
// users.sort(byField("age"));
// users.forEach((user) => console.log(user.age));
// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     return function (x) {
//       shooters.push(x);
//     };
//   }
//   return shooters;
// }
// let army = makeArmy();

// console.log(army[0]()); // у 0-го стрелка будет номер 10
// console.log(army[5]());

// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return count;
//   }
//   counter.set = (value) => (count = value);
//   counter.decrease = () => count--;
//   return counter;
// }

// let counter = makeCounter();

// // console.log(counter()); // 0
// // console.log(counter()); // 1

// counter.set(10); // установить новое значение счётчика

// // console.log(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// console.log(counter());
// counter.set(15);

// console.log(counter());
// counter.decrease();
// console.log(counter());

// function printNumbers(from, to) {
//   let a = from;
//   let b = setInterval(function go() {
//     setTimeout(() => (a > to ? clearInterval(b) : console.log(a++)));
//   }, 1000);
// }
// printNumbers(1, 5);

// let i = 0;

// setTimeout(() => console.log(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for (let j = 0; j < 100000000; j++) {
//   i++;
// }

// let user = {
//   firstName: "Вася",
// };

// function func() {
//   alert(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser(); // Вася

// function mul(a, b) {
//   return a * b;
// }
// let multie = mul.bind(null, 2);
// console.log(multie(3));

// function f() {
//   console.log(this); // ?
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();
// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });
// sayHi();
// alert(bound.test);

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(
//   function () {
//     user.loginOk();
//   },
//   function () {
//     user.loginFail();
//   }
// );

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList() {
//     setTimeout(() => {
//       this.students.forEach((student) => console.log(`${student}`));
//     }, 2000);
//   },
// };
// group.showList();

// function defer(f, ms) {
//   return function (...args) {
//     let ctx = this;
//     setTimeout(function () {
//       return f.apply(ctx, args);
//     }, ms);
//   };
// }
// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды

// let user = {
//   name: "John"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log( JSON.stringify(descriptor, null, 2 ) );

// let user = {
//   name: "Vasya",
//   toString() {
//     return this.name;
//   },
// };
// Object.defineProperties(user, "toString", {
//   enumerable: false,
// });
// for (let key in user) {
//   console.log(key);
// }
// console.log(Math.PI);

// let user = {
//   name: "vasya",
//   surname: "Konovalov",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };
// console.log(user.fullName);

// let user = {
//   name: "John",
//   surname: "Smith",
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };
// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };
// // console.log(user.fullName);
// console.log(admin.fullName);

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // модифицирует rabbit.isSleeping
// rabbit.sleep();

// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping);

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2)

// delete animal.jumps;

// console.log(rabbit.jumps);

// let head = {
//   glasses: 1,
// };

// let table = {
//   __proto__: head,
//   pen: 3,
// };

// let bed = {
//   __proto__: table,
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   __proto__: bed,
//   money: 2000,
// };
// console.log(pockets.glasses);

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = [food];
//   },
// };

// let speedy = {
//   __proto__: hamster,
//   stomach: [],
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: [],
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

// function User(name) {
//   this.name = name;
// }
// let user = new User("John");
// let user2 = new user.constructor("Pete");
// console.log(user);
// console.log(user2);

// let animal = {
//   eats: true,
// };
// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   },
// });
// console.log(rabbit.jumps);

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//   console.log(this.name);
// };

// let rabbit = new Rabbit("Rabbit");
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   // ...
// }
// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.speed = 0;

//     this.earLength = earLength;
//   }

//   // ...
// }

// // Не работает!
// let rabbit = new Rabbit("Белый кролик", 10);
// console.log(rabbit); // Error: this is not defined.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }
// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }
// }
// let clock = new ExtendedClock({ template: "h:m:s", precision: 1000 });
// console.log(clock.start());

// let animal = {
//   name: "Animal",
//   eat() {
//     console.log(`${this.name} ест.`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   name: "Кролик",
//   eat() {
//     // вот как предположительно может работать super.eat()
//     this.__proto__.eat(this); // (*)
//   },
// };

// rabbit.eat();

// class Rabbit extends Object {
//   constructor(name) {
//     super(name);
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Кроль");

// console.log(rabbit.hasOwnProperty("name"));

class Person {
  static retirementAge = 65;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
  }
  static calculateRestAges(person) {
    if (this.retirementAge > person.age) {
      const restAges = this.retirementAge - person.age;
      console.log(`до пенсии осталось ${restAges} лет`);
    } else {
      const unRestAges = person.age - this.retirementAge;
      console.log(`вы уже на пенсии ${unRestAges} лет`);
    }
  }
}

const tom = new Person("Tom", 37);
Person.calculateRestAges(tom); // До пенсии осталось 28 лет
const bob = new Person("Bob", 71);
Person.calculateRestAges(bob); // Вы уже на пенсии
