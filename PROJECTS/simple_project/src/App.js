import "./App.css";
import Animals from "./components/animals/Animals";

function App() {
  // const gor = `hello, ${first.length > 0 ? `${firstname[0]}.` : '' } ${last.name}`
  return (
    <div className="App">
      <Animals></Animals>
    </div>
  );
}

export default App;

// class Elefant {
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит`);
//   }
// }
// let vasya = new Elefant(`Vasya`);
// vasya.run(100);

// class Girafe extends Elefant {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }
// }
// let masha = new Girafe(`Masha`);
// masha.run(30);
// class Rabbit extends Elefant {
//   stop() {
//     setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
//   }
// }
// let igor = new Rabbit("Name");
// igor.stop(50);

// Объекты
// let vasysa = {
//   name: "aaa",
//   age: 20,
//   "likes girls": true,
// };
// alert(vasysa["likes girls"]);
// delete vasysa["likes girls"];
// let user = {
//   name: "fdfd",
//   age: 30,
// };
// let key = prompt("Код работает");
// alert(user[key]);
// let fruits = prompt("Какой фрукт сьесть?", "banana");
// let apple = {
//   [fruits]: 5,
// };
// alert(apple.banana);
// let gosha = {
//   age: 20,
//   name: "fdklfjdjf",
// };
// alert(gosha.name);
// alert("key" in gosha);
// // alert("age" in gosha);
// for (let v in gosha) {
//   alert(v);
//   alert(gosha[v]);
// }

// let users = {
//   name: "Will",
//   surname: "Smith",
// };
// users.name = "Pete";
// delete users.name;

// let schedule = {};
// function isEmpty() {
//   for (let key in schedule) {
//     return false;
//   }
//   return true;
// }
// // alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// // alert(isEmpty(schedule)); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// // let sum = salaries.Ann + salaries.John + salaries.Pete
// console.log(sum)
// let sums = 0;
// for (let a in salaries) {
//   sums += salaries[a];
// }
// console.log(sums);

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// multiplyNumeric(menu);
// function multiplyNumeric(obj) {
//   for (let keys in obj) {
//     if (typeof obj[keys] == "number") {
//       obj[keys] *= 2;
//     }
//   }
// }
// console.log(menu);
// let user = { name: "Иван" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// Object.assign(user, permissions1, permissions2);
// console.log(user);

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );

// user = {
//   name: "Джон",
//   age: 30,
// };
// user.sayHi = function () {
//   console.log("Hello");
// };
// user.sayHi();

// user = {
//   sayHi() {
//     console.log("Hellos");
//   },
// };
// user.sayHi();

// let user = {
//   name: "Джон",
//   go: function () {
//     console.log(this.name);
//   },
// }(user.go)();

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

// let calculator = {
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },

//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep();

// let user = {
//   name: 'vasya',
//   age:20,
//   value: 50,
// };

// console.log(user?.health)

// let n = 1.23656;
// console.log(n.toFixed(2));

// let str = "Привет";

// let vasya = () => {
//   str = Number(5);
//   console.log(str);
// };
// vasya();
// let sum = 0.1 + 0.2;
// console.log(+sum.toFixed(2));
// console.log(typeof sum);
// alert(9999999999999999);
// alert(Math.random());s

// let asa = {
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
// };
// asa.read();
// alert(asa.sum());
// let a = +prompt("fdfdf", "");
// let b = +prompt("fdfdf", "");
// alert(a + b);
// let num = 6.35;
// alert(Math.round(num * 10) / 10);

// let names = ["Vasya", "Sasha", "Tom"];
// // console.log(names.at(-1));
// // for (let i = 0; i < names.length; i++) {
// // alert(names[i]);
// // }
// names.length = 1;
// console.log(names[3]);
// console.log(null === undefined);
// console.log([] == []);

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert(fruits.length); // ?

// let styles = ["Jase", "Bluse", "Rock and Role", "fdfd", "4654654"];

// styles[Math.floor((styles.length - 1) / 2)] = "Classic";
// console.log(styles[Math.floor((styles.length - 1) / 2)]);
// let i = styles.pop(0);

// styles.unshift("rap", "reggi");

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// });

// arr[2](); // ?

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Enter a number", 0);
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (let n of numbers) {
//     sum += n;
//   }
//   return sum;
// }
// alert(sumInput());

// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert(sumInput());

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// arr.splice(0, 3, "vasya", "fuck");
// console.log(arr);

// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(2, 0, "Difficult");
// console
//   .log(arr)

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} has a position ${index} in ${array}`);
// });

// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];
// let user = users.find((i) => i.id === 1);
// console.log(user.name);

// function compareNumbers (a,b) {
//   if(a<b)return -1;
//   if(a>b) return 1;
//   if(a===b) return 0;
//   }
//   let arr =[1,15,2];
//   arr.sort(compareNumbers)
//   console.log(arr)

//   [1, -2, 15, 2, 0, 8].sort(function(a,b){
//     console.log(a, '<>', b);
//   });
// let arr = [1, 30, 15, 12];
// arr.sort((a, b) => a - b);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(typeof arr);

// let names = "Вася, Петя, Маша";
// let arr = names.split(", ");
// for (let name of arr) {
//   console.log(`The message give ${name}`);
// }

// let str = "тест";
// let a = str.split('')
// console.log(a)

// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join(';');
// console.log(str);

// let arr = [1, 2, 3, 4, 5, 10, 50];
// let b = arr.reduce((sum, current) => sum + current, 0);
// alert(b);

// let arr = [1, 2, 3, 4, 5, 10, 50];
// let b = {};
// console.log(Array.isArray(arr));
// console.log(Array.isArray(b));

// function filterRangeInPlace(arr, a, b) {
//   return arr.filter((i) => a <= i && i <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRangeInPlace(arr, 1, 4);
// alert(filtered);

// alert(arr);

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }
// console.log(camelize("background-color"));

// function filterRange(arr, a, b) {
//   return arr.filter((item) => item >= a && item <= b);
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let vasya = arr[i];
//     if (vasya < a || vasya > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);
// function decreasingNumbers(a, b) {
//   if (a > b) return -1;
//   if (a < b) return 1;
//   if (a === b) return 0;
// }
// let arr = [5, 2, 1, -10, 8];
// arr.sort(decreasingNumbers);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//   return arr.slice().sort()
// }
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// function Calculator() {
//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };
//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];
//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }
//     return this.methods[op](a, b);
//   };
//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }
// let multiply = new Calculator();
// multiply.addMethod("**", (a, b) => a ** b);
// let result = multiply.calculate("2 ** 3");
// console.log(result);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map((item) => item.name);
// console.log(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];
// let usersMapped = users.map((user) => ({
//   fullname: `${user.name}, ${user.surname}`,
//   id: user.id,
// }));
// console.log(usersMapped[0].id);

// let petya = { name: "Петя", age: 30 };
// let vasya = { name: "Вася", age: 25 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// console.log(arr);

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
// let arr = [1, 2, 3];

// console.log(shuffle(arr));
// console.log(arr);
// console.log(arr);

// function getAverageAge(users) {
//   return users.reduce((prev, user) => user.age + prev, 0) / users.length;
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];
// console.log(getAverageAge(arr));

// function unique(arr) {
//   /* ваш код */
// }

// let map = new Map();
// map.set("banana", 1);
// map.set("orange", 2);
// map.set("meat", 4);

// let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

// // готово!
// // obj = { banana: 1, orange: 2, meat: 4 }
// console.log(obj.orange); // 2

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// alert(unique(values));

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// alert(keys);

// let user = {
//   name: "John",
//   age: 30,
// };
// for (let v of Object.values(user)) {
//   alert(v);
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function sumSalaries(){
//   for(let v of Object.values(salaries)){
//     return v;
//   }
// }

// alert( sumSalaries(salaries) );

// let user = {
//   name: "John",
//   age: 30,
// };
// for (let [key, value] of Object.entries(user)) {
//   alert(`${key} ${value}`);
// }

// let [firstName, surname] = [];
// alert(firstName);
// alert(surname);

// let [name = "Vasya", surName = "Konovalov"] = ["Vasya"];
// alert(name);
// alert(surName);

// prompt запустится только для surname
// let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

// alert(name); // Julius (из массива)
// alert(surname);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 300,
// };
// // let { title: t, width: w, height = 100 } = options;
// // alert(t); // Menu
// // alert(w); // 100
// // alert(height);
// let { title, ...rest } = options;
// alert(title);
// alert(rest.height);

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };
// let {
//   size:{
//     width,
//     height,
//   },
//   items:[item1, item2],
//   title = 'Vasya'
// }=options;

// let user = {
//   name: "John",
//   years: 30,
//   isAdmin: true,
// };
// let { name, years: age, isAdmin = false } = user;
// alert(name);
// alert(age);
// alert(isAdmin);

// function topSalary(salaries){
//   return salaries.Object.entries(salaries)
// }

// function topSalary(salaries) {
//   let salary = Object.entries(salaries);
//   if (salary.length === 0) {
//   return null;
//   };
//   salary.sort( (a, b) => {
//   let [one, two] = a;
//   let [three, four] = b;
//   return four - two;

//   })
//   return salary[0][0];
//   }
//   console.log(topSalary(salaries));
// let salaries = {
//   John: 1000,
//   Pete: 1500,
//   Mary: 2000,
// };
// function topSalary(salaries) {
//   let max = 0;
//   let maxName = null;
//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }
//   return maxName;
// }
// alert(topSalary(salaries));

// let date = new Date();
// alert(date);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup ссылается на room
// };
// // console.log(
// //   JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
// // );
// room.occupiedBy = meetup;
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return key === "occupiedBy" ? undefined : value;
//   })
// );

// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// alert(numbers[2]);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// // let meetup = JSON.parse(str);
// let meetup = JSON.parse(str, function (key, value) {
//   if (key === "date") return new Date(value);
//   return value;
// });
// console.log(meetup);
// console.log(meetup.date.getDate());

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
// schedule = JSON.parse(schedule, function (key, value) {
//   if (key === "date") return new Date(value);
//   return value;
// });
// console.log(schedule.meetups[1].date.getDate());

// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// let vasya = JSON.parse(JSON.stringify(user));
// console.log(vasya);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key !== "" && value === meetup ? undefined : value;
//   })
// );
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(2, 2));

// function pows(x, n){
//   if(n===1 || n===2){
//     return x;
//   }else{
//     return x * pows(x, n-1)
//   }
// }
// console.log(pows(5,4));

// function powss(x, n) {
//   return n === 1 ? x : x * powss(x, n - 1);
// }
// console.log(powss(2, 3));

// let company = {
//   // тот же самый объект, сжатый для краткости
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep);
//     }
//     return sum;
//   }
// }
// alert(sumSalaries(company));

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(100));
// function sumTo2(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sumTo2(n - 1);
//   }
// }
// console.log(sumTo2(100));
// function sumTo3(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(sumTo3(100));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// function vivod() {
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }
// vivod(list);
// function vivod2(list) {
//   console.log(list.value);
//   if (list.next) {
//     vivod2(list.next);
//   }
// }
// vivod2(list);
//рекурсия
// function vivod3(list) {
//   if (list.next) {
//     vivod3(list.next);
//   }
//   console.log(list.value);
// }
// vivod3(list);

//цикл
// function vivod4(list) {
//   let arr = [];
//   let tmp = list;
//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
// vivod4(list);
// function sumAll(...args) {
//   let sum = 0;
//   for (let i of args) sum += i;
//   return sum;
// }
// alert(sumAll(1, 5, 8, 10));
// for (let i = 0; i < 3; i++) {
//   alert(i);
// }
// let i = 3;

// while (i) {
//   alert(i--);
// }

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";
// name = "Vasya";

// sayHi();

// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     alert(name);
//   };
// }

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

// let g = f();
// g();

// let value = "Сюрприз!";

// function f() {
//   let value = "ближайшее значение";

//   function g() {
//     debugger; // в консоли: напишите alert(value); Сюрприз!
//   }

//   return g;
// }

// let g = f();
// g();

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

// alert(counter.up()); // ?
// alert(counter.up()); // ?
// alert(counter.down());

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }

// }
// sayHi();

// function filterInBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert(arr.filter(filterInBetween(3, 6)));

// function filterInArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert(arr.filter(filterInArray([1, 2, 3])));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// function byField(f) {
//   return function (a, b) {
//     return a[f] > b[f] ? 1 : -1;
//   };
// }
// users.sort(byField("name"));
// users.forEach((user) => alert(user.name));
// users.sort(byField("age"));
// users.forEach((user) => alert(user.age));

// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function () {
//       // функция shooter
//       alert(j); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// function ask(question, ...handlers) {
//   let isYes = prompt(question);

//   for (let handler of handlers) {
//     if (handler.length === 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }
// }

// // для положительных ответов вызываются оба типа обработчиков
// // для отрицательных - только второго типа
// ask(
//   "Вопрос?",
//   () => alert("Вы ответили да"),
//   (result) => alert(result)
// );

// function sayHi() {
//   alert("Hi");

//   // давайте посчитаем, сколько вызовов мы сделали
//   sayHi.counter++;
// }
// // начальное значение
// sayHi.counter = 0;
// sayHi(); // Hi
// sayHi(); // Hi

// alert(`Вызвана ${sayHi.counter} раза`);

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0;
//   return counter;
// }
// let counter = makeCounter();
// counter.count = 10;
// alert(counter());
// let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func("Guest");
//   }
// };
// let welcome = sayHi;
// sayHi = null;
// welcome();

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0;
//   counter.set = (value) => (counter.count = value);
//   counter.decrease = () => counter.count--;
//   return counter;
// }
// let counter = makeCounter();
// counter.count = 10;
// alert(counter());

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = (value) => (count = value);

//   counter.decrease = () => count--;

//   return counter;
// }
// let counter = makeCounter();
// counter.count = 10;
// alert(counter.decrease(10));

// function sayVasya(name = "vasya", sirname = "konovalov") {
//   alert(`Hello ${name} ${sirname}`);
// }
// setTimeout(sayVasya, 1000);
// let timerId = setTimeout(() => alert(`Hello`), 1000);
// alert(timerId);
// clearTimeout(timerId);
// alert(timerId);

// let timerId = setInterval(() => alert(`Hello`), 1000);
// setTimeout(() => {
//   clearInterval(timerId);
//   alert(`stop`);
// }, 5000);
// setTimeout(() => alert(`World`));
// alert("Hello");
// function printNumbers(from, to) {
//   let current = from;
//   let vasya = setInterval(function () {
//     alert(current);
//     if (current === to) {
//       clearInterval(vasya);
//     }
//     current++;
//   });
// }
// printNumbers(5, 7);

// function printNumbers(from, to) {
//   let current = from;
//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(5, 10);

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for (let j = 0; j < 100000000; j++) {
//   i++;
// }
// function slow(x) {
//   alert(`Called ${x}`);
//   return x;
// }
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x);
//     cache.set(x, result);
//     return result;
//   };
// }
// slow = cachingDecorator(slow);
// alert(slow(1)); // slow(1) кешируем
// alert("Again: " + slow(1)); // возвращаем из кеша

// alert(slow(2)); // slow(2) кешируем
// alert("Again: " + slow(2));

// сделаем worker.slow кеширующим
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // здесь может быть страшно тяжёлая задача для процессора
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   },
// };

// // тот же код, что и выше
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x); // (**)
//     cache.set(x, result);
//     return result;
//   };
// }

// alert(worker.slow(1)); // оригинальный метод работает

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

// alert(worker.slow(2));
// console.log([7, 3, 31].sort());
// console.log([7, 3, 31].sort());
// аналогично (из кеша)
// let worker = {
//   slow(min, max) {
//     alert(`${min} + ${max}`);
//     return min + max;
//   },
// };
// function cachingDecorator(func, hash) {
//   let cache = new Map();
//   return function () {
//     let key = hash(arguments);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     let result = func.call(this, ...arguments);
//     cache.set(key, result);
//     return result;
//   };
// }
// function hash(args) {
//   return args[0] + " " + args[1];
// }
// worker.slow = cachingDecorator(worker.slow, hash);
// alert(worker.slow(3, 10));
// alert("Vasyua" + worker.slow(10, 50));
// let wrapper = function(){
//   return func.apply(this, ...arguments)
// }

// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }
//   wrapper.calls = [];
//   return wrapper;
// }
// spy(alert(typeof 50));

// let x = setTimeout(() => alert(`vasya`), 5000);
function delay(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
let vasya = delay(alert, 3000);
vasya("Vasya");
