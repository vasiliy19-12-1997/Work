mconst hello = 'привет мир'
console.log(`В строке '${hello}' ${hello.length} символов`);


const hello = "привет мир. пока мир";
const key = "мир";

const firstIndex = hello.indexOf(key);
const lastIndex = hello.lastIndexOf(key);
console.log('Первое вхождение', firstIndex );
console.log('Первое вхождение', lastIndex );

const hello = "привет мир. пока мир";
const key = "мир";

console.log(hello.includes('мир'));

const vasya = 'vasya'
console.log(vasya.includes('vasya'));


const george = 'Как дела Джордж';
const mars = george.substring(5,9);
console.log(mars);

const george = 'Как дела Джордж';
// const mars = george.slice(5,2);
// console.log(mars);
const mars2 = george.substring(5,0);
console.log(mars2);
mars = george.slice(-5,-1);
console.log(mars);

let sun = 'Солнце';
let bye = ' Пока';
let sunBye = sun.concat(bye);
console.log(sunBye);

let car = 'BMV';
car = car.replace('BMV', 'AUDI');
console.log(car);


const road = 'Какая хорошая дорога';
const exp = /\s/;
const result = road.split('exp');
result.forEach(value=>{
    console.log(value);
});

let cars = 'BMV, AUDI, BMV, MERSEDES, LADA';
cars = cars.replaceAll('BMV', 'JS');
console.log(cars);

const email = 'Приглашаем вас на очередное собрание';
const messageEmail = email.split(' ');
console.log(messageEmail);
messageEmail.forEach(function(value){
    console.log(value);
});

let omg = 'omg';
omg = omg.padStart(12, 'gggggggg ');
console.log(omg);

let unit = 'unit 1';
let exp = /Unit/i;
const result = exp.exec(unit);
result.forEach(function(value){
    console.log(value);//unit
});


let unit = 'unit 1';
let exp = /Unit/i;
const result = exp.test(unit);
console.log(result);//true

let unit = 'unit 1';
let exp = /[a-z]/i;
const result = exp.test(unit);
console.log(result);//true


let initialText = "обороноспособность";
let exp = /[^а-я]/;
let result = exp.test(initialText);
console.log(result); // true



// МЕТОД SPLIT
const road = 'Какая хорошая дорога';
const exp = /\s/;
const result = road.split('exp');
result.forEach(value=>{
    console.log(value);
});


const team = 'Зенит опять выиграл дома домашнюю игру';
const exp = /дом[а-я]*/gi;
const result = team.match(exp);
result.forEach(function(value){
    console.log(value);
});

// метасимовлы b
const team = 'Zenit опять выиграл дома домашнюю игру';
const exp = /\bZenit\b/g;
const result = team.replace(exp, 'Dymamo');
console.log(result);

let initialText = '<img src= "picture.png" />'; 
let exp = /[a-z]+.(png|jpg)/i;
let result = initialText.match(exp);
result.forEach(value=>{
    console.log(value);
});

const exp = /(?<year>\d{4})-(?<month>\d{2})/u;
const result = exp.exec("2021-09");
console.log(result.groups);
console.log(result.groups.year);


const text1 = "All costs: $10.53";
const text2 = "All costs: €10.53";
const exp = /(?<=\$)\d+(\.\d*)?/;
const result1 = exp.test(text1);
console.log(result1);

const text1 = "All costs: 1Vasya";
const exp = /(?<=1)\w*?/;
const result1 = exp.exec(text1);
console.log(result1);

Тернарная операция
const a = 1;
const b = 2;
const result = a < b ? a : b;
console.log(result); //1


const a = 1;
const b = 2;
const result = a < b ? a + b :a - b;
console.log(result); //3


const result1 = undefined ?? 'vasya';
console.log(result1);
const result1 = null ?? 'vasya';
console.log(result1);

const result1 = 'grisha' ?? 'vasya';
console.log(result1);

const result1 = 2 ?? 'vasya';
console.log(result1);

let name = null;
let sun = 'sunshine';
name ??= sun;
console.log(name);//sunshine

let number1 = 5;
let number2 = '2';
let result = parseInt(number2) + number1;
console.log(result);

let number1 = '5.2';
let number2 = '2.1';
let result = parseFloat(number2) + parseFloat(number1);
console.log(result);


let a = 100;
let b = 500;

if(a>100){
    console.log('Доход ниже среденего ');
}else if(b>200){
    console.log('Доход выше среднего');
}else{
    console.log('ебать ты лох');
}

let a = 100;
switch(a){
    case 100:
        console.log('Красава!');
        break;
    case 200:
        console.log('лУчший');
    break;
    default:
        console.log('аахх');
        break;
}


for(let i=1; i<=10; i+=3 ){
    console.log(i)
}

for(let i=1, j=1; i<=10, j<=10; i+=3, j+=2){
    console.log(i+j)
}


for(let i=1; i <= 4; i++){
      
    for(let j = 1; j <=4; j++){
       console.log(i * j);
    }
}




let i =100;
while(i>=10){
    console.log(i);
    i-=10;
}

for(let i=100; i>=10; i-=10){
    console.log(i)
}

let i =100;
let j = 10;
while(i>=10){
    console.log(i);
    i-=10;

    while(j>=1){
        console.log(j*i);
        j-=1;
    }
}

let i = 100;
let j = 10;

for(let i = 100, j = 10; i >= 10, j >= 1; i -=10, j -= 1){
    console.log(i);
    console.log(i*j);
} 

let i = 100;
do{
    console.log(i);
    i-=10;
}while (i>=10);


for(let i=100; i>=10; i-=10){
    if(i===30) break;
    console.log(i)
}

for(let i=100; i>=10; i-=10){
    if(i===30) continue;
    console.log(i)
}

const person = {
    name:'Tom',
    age:40,
}
for(vas in person){
    console.log(vas);
}


const name = 'METANIT.COM';
for(ch of name){
    console.log(ch);
}

const food = ['doshirak', 'apple', 'meat']
for(ch of food){
    console.log(ch);
}
const food = ['doshirak', 'apple', 'meat']
food.forEach(value=>{
    console.log(value);
})




let gol =(a = 5, b = 10)=>{
    console.log(a+b);
}
let summ = gol;
summ();
summ(100,200);

function sum (){
    let result = 0;
    for(const n of arguments)
    result += n;
    console.log(result);
}
sum(1,10,50);


function display(season, ...temps){
    console.log(season);
    for(index in temps){
        console.log(temps[index]);
    }
}
display('Лето', 10, 20, 40, 50);


function sum (x, y) {
    return x + y;
}

function substract (x, y) {
    return x - y;
}

function operation (x, y, func) {
    const result = func(x, y);
    console.log(result);
}

console.log('Summa');
operation(10, 100, sum);

console.log('Vishitanie');
operation(10, 100, substract);

function menu(n){
    if(n==1)return function(x,y){return x + y;}
    else if(n==2)return function(x,y){return x / y;}
    else if(n==3)return function(x,y){return x * y;}
    else if(n==4)return function(x,y){return x % y;}
    else if(n==5)return function(x,y){return x - y;}
    return function(){return 0;};
}
let calculator = menu(1);
console.log(calculator(2,5));

calculator = menu(2);
console.log(calculator(2,5));

calculator = menu(3);
console.log(calculator(2,5));

calculator = menu(4);
console.log(calculator(2,5));

calculator = menu(5);
console.log(calculator(2,5));

function other(){
    let x = 1;
    function inner(){
        x++;
        console.log(x);
    }
    return(inner);
}
fn = other();
fn();

// ПАтерн модуль
let foo = (function(){
    let obj = {
        greeting: 'Hello'
    };
    return {
        display: function(){
            console.log(obj.greeting);
        }
    }
})();
foo.display();



let foo = (function(){
    let obj = {
        greeting: 'Hello',
        howOld: 17,
    };
    return {
        display: function(){
            console.log(obj.greeting);
            console.log(obj.howOld);
            
        }
    }
})();
foo.display();

// чуть болле сложный пример
let calculator = (function(){
    let data = {
        number: 0,
    }
    return {
        sum:function(n){
            data.number += n;
        },
        substract:function(n){
            data.number -= n;
        },
        display:function(){
            console.log('Result', data.number );
        },
    }
})();
calculator.sum(120);
calculator.sum(120);
calculator.display();

// рекурсивный функции, вызыввает саму себя
function getFactorial(n){
    if(n===1){
        return 1;
    }else{
        return getFactorial(n-1)*n
    }
}
let result = getFactorial(4);
console.log(result);

// числа fibonachi
function getFactorial(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    else{
        return getFactorial(n-1) + getFactorial(n-2)
    }
}
let result = getFactorial(8);
console.log(result);

// Переопределение функций
function display(){
    console.log('Привет, ребята!');

    display = ()=>{
        console.log('Добрый вечер, а что это значит');
    }
}
let displayMessage = display;
display();
display();
displayMessage();
displayMessage();

// Hoisting
display();
function display(){
    console.log('Добрый вечер');
}

display();
let display =()=>{
    console.log('Добрый вечер');
}//ReferenceError: Cannot access 'display' before initialization

// Передача параметров по значению и по ссылке
change = (x)=>{
    x = 2 * x;
    console.log('x in change', x);
}
let n = 100;
console.log(`x before change ${n}`);
change(n);
console.log(`x after change ${n}`);

change = (user) => {
    user.name = 'Tom';
}
let vasua = {
    name: 'Vasya'
};
console.log('dfdfdf', vasua.name);
change(vasua);
console.log('dfdfdf', vasua.name);

change = (user) => {
    user = {
        name: 'Tom'
    }
}
let vasua = {
    name: 'Vasya'
};
console.log('dfdfdf', vasua.name);
change(vasua);
console.log('dfdfdf', vasua.name);


let summ = (x, y) =>{
    console.log(x+y);
}
summ(1,2);

let summ = (x, y) =>{
   return x + y;}

console.log(summ(2,5));

const hello = name =>`Hello ${name}`;

console.log(hello('Vasya'));


let user = (userName, userAge)=>({
    name: userName,
    age: userAge,
})
let tom = user('tom', 34);
let vas = user('vasya', 34);
console.log(tom.name, tom.age);
console.log(vas.name, vas.age);

const square = (n) => {
    let result = n*n;
    console.log(result);
}
square(5);
square(100);

const square = (n) => {
    let result = n * n;
    return result;
}
console.log(square(5));

// ОБъекты

let obj = {
    name: 'vasya',
    age: 80,
    skill: 100,
    health: 100,
}
obj.display = () => {
    console.log(obj.name, obj.age, obj.skill, obj. health);
}
obj.display();


let obj = {
    name: 'vasya',
    age: 80,
    skill: 100,
    health: 100,
}
obj.display = function (){
    console.log(this.name, this. age);
}
obj.display();

let obj = {
    name: 'vasya',
    age: 80,
    skill: 100,
    health: 100,
    display(){
        console.log(`My name is ${this.name}, i am ${this.age} years old, my health is ${this.health}%`);
    },
    play(game){
        console.log(`I like play ${game}`);
    }
}
obj.display();
obj.play('The witcher 3: Wild Hunt');

let obj = {};
obj['name'] = 'Vasya';
obj['display'] = function(){
    console.log(`Name:${this.name}`);
}
obj['display']();


let obj = {
    'full name': 'vasya',
    'age': 80,
    'skill': 100,
    'health': 100,
    'display'(){
        console.log(`My name is ${}, i am ${this.age} years old, my health is ${this.health}%`);
    },
    play(game){
        console.log(`I like play ${game}`);
    }
}
obj.display();
obj.play('The witcher 3: Wild Hunt');
console.log('[full name]');


let prop1 = 'name';
let prop2 = 'age';
let tom = {
    [prop1]:'Vasya',
    [prop2]:'Jake',
}
console.log(tom);
console.log(tom.name);
console.log(tom.age);



createObject = (propName, propValue) =>{
    return{
        [propName]: propValue,
        print(){
            console.log(`${propName}:${propValue}`);
        }
    };
}
let soldier = createObject('Name', 'Vasya');
soldier.print();
let game = createObject('Name', 'Detroit Become Human');
game.print();

const person = {
    name: 'Nate',
    sirname: 'drake',
}
Object.freeze(person);
console.log(`${person.name}`);

getSalary=(status)=>{
    if(status==='senior') return 1500;
    else return 500;
}
const name = 'Tom';
const age = 37;
const person = (name. age, getSalary());
console.log(person);

const move = (name, place)=>{
    console.log(`${name} goes to ${place}`);
};
move('vasya', 'cinema');

let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();

let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}

const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo["likes js"]);


const userInfo ={
    name: 'vasya',
    age: 30,
}
userInfo.name = 'Лена';
delete(userInfo.name);


let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}


let sourseNum = 1.005 + Number.EPSILON;
let numOne = Math.round(sourseNum * 100) / 100;
console.log(numOne); 



let value = parseFloat("135.58px");
console.log(value);

Посттроить верное условное ветвление

let value = 58 + "Фрилансер";
if (value) {
	console.log('Результат выражения NaN');


    Найти максимальное число из 10,58,39,-150,0
    let maxs = Math.max(10,58,39,-150,0);
    console.log(maxs);

    Округлить число 58.858 до числа 58

    let opa = 58.858;
    console.log(Math.floor(opa), typeof(opa));


    //ДОМАШКА

1. Изучить теорию
2. Решить задачи:
*/

// Задача №1. Верна ли запись?
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаем получить Привет! Я фрилансер
console.log(text);

// Задача №2. Получить символ "н" строки:
let text = 'фрилансер';
console.log(text.slice(5,6));

// Задача №3. Верно?
let text1 = 123 ;
let text2 = parseInt('479');
console.log(text1+text2);

// Ожидаем 579
console.log(text);


// Задача №4. Получить строку в верхнем регистре
let text = 'фрилансер';
console.log(text.toUpperCase());

// Задача №5. Получить подстроку "лан" из:
let text = 'фрилансер';
console.log(text.slice(3,6));

// Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 3));

let country = {
    name:'Швеция',
    languages: ['english','russian'],
    capital:{
        name:'Стокгольм',
        population: 500,
    },
    cities:[
        {name: 'Ekaterinburg', population: 1000},
        {name: 'Moscow', population: 1500},
    ]
};
for(let i = 0; i < country.languages.length; i++)
console.log(country.languages[i]);

const tom = {name:'tom'};
const bob = tom;
console.log(tom.name);
console.log(bob.name);
bob.age = 37;
console.log(tom.age);


const tom = {name:'tom', age:50};
const bob = Object.assign({}, tom);
console.log(bob);


const tom = { name: "Tom"};
const sam = { age: 37};
const person = Object.assign({height: 170}, tom, sam);
console.log(person);

const tom = { name: "Tom"};
const sam = { age: 37};
const person = { height: 170};
Object.assign(person, tom, sam);
console.log(person);

const tom = { name: "Tom", age: 37, company: {title: "Microsoft"}};
const bob = {...tom, name:'Bob'};
console.log(bob);


const user = {
    name: 'vasya',
    age: 50,
    print : function(){
        console.log(this.name);
        console.log(this.age);
    },
}
const hasNameProp = 'name' in user;
console.log(hasNameProp);
hasNameProp !== undefined;
console.log(hasNameProp);
const hasNameProps = user.hasOwnProperty('name');
console.log(hasNameProps);


const tom = {
    name: "Tom",
    age: 26,
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};
for(const prop in tom)
console.log(prop, '', tom[prop]);

const tom = {
    name: "Tom",
    age: 26,
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};
for(const prop of Object.entries(tom))
console.log(prop);


const tom = {
    name: "Tom",
    age: 26,
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};

console.log(Object.keys(tom));//[ 'name', 'age', 'print' ]


const tom = {
    name: "Tom",
    age: 26,
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};
console.log(Object.values(tom));//[ 'Tom', 26, [Function: print] ]
 
function createUser (pName, pAge) {
    return {
        name:pName,
        age:pAge,
        displayInfo: function(){
            console.log("Имя: " + this.name + " возраст: " + this.age);
        },
        driveCar: function(car){
            console.log(this.name + " ведет машину " + car.name);
        },
    };
};
function createCar(mName, mAge) {
    return {
        name:mName,
        age:mAge,
    };
};
let user = createUser('Вася', 24);
user.displayInfo();
let mersedes = createCar('Gl30', 5);
user.driveCar(mersedes);



function createUser (pName, pAge) {
    
        this.name=pName,
        this.age=pAge,
        this.displayInfo = function(){
            console.log("Имя: " + this.name + " возраст: " + this.age);
        };
        this.driveCar=function(car){
            console.log(this.name + " ведет машину " + car.name);
        };
    
};

let tom = new createUser('Vasya', 50);
tom.displayInfo();
let isUser = tom instanceof createUser;
console.log(isUser);


// Конструктор
function user(pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
};
user.prototype.hello = function(){
    console.log(`${this.name} говорит hello`);
};
user.prototype.maxAge = 110;

let tom = new user('Tom', 20);
tom.hello();
let bob = new user('bob', 50);
bob.hello();
console.log(tom.maxAge);
console.log(bob.maxAge);

// Инкапсуляция
function user  (name, age) {
    this.name = name;
    _age = age;
    this.displayInfo = function() {
        console.log("Имя: " + this.name + "; возраст: " + _age);
    };
    this.getAge = function() {
        return _age;
    };
    this.setAge = function(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            _age = age;
        } else {
            console.log(`${name}, вы уверены ?`);
        };
    };
};
let vasya = new user ('Vasya', 100);
vasya.getAge();
console.log(vasya.getAge());
vasya.setAge(5500);

// Функция как объект. Методы call и apply

function add (x,y){
    return x + y;
};
let result = add.call(this, 3, 10);
console.log(result);

function User (name, age) {
    this.name = name;
    this.age = age;
}
let tom = new User ('Tom', 50);
function displayInfo(){
    console.log(this.name);
}
displayInfo.call(tom);


// Наследование
// классы
class vasya {
    name = 'vasya';
    age = 50;
    skill = 'worldskills';

}
const lox = new vasya('vasya');
// свойство и публичное поле
lox.name = 'misha'
console.log(lox.name);
class Person{
    name;
    age;
    move(place, speed){
        console.log(`Go to ${place} for ${speed} км/ч`);
       
    };
    eat(){
        console.log(`Eat apples`);
    };
};
const roma = new Person('Roma', 20,);
roma.move('Ekaterinburg', 50);
roma.eat();



class Person{
    name;
    age;
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom = new Person();
tom.name = "Tom";
tom.age = 37;
tom.print();    // Name: Tom  Age: 37
 
const bob = new Person();
bob.name = "Bob";
bob.age = 41;
bob.print(); 

class Person{
    constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
    }
    print() {
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const bill = new Person('Bill', 50);
bill.print();


// Приватные поля и методы


class Person{
    #name;
    #age;
    constructor(personName, personAge) {
    this.#name = personName;
    this.#age = personAge;
    }
    print() {
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
}
const bill = new Person('Bill', 50);
bill.print();
bill.#name = 'vasya';
console.log(bill.#name);


class Person{
    #name;
    #age;
    constructor(name, age) {
    this.#name = name;
    this.#age = age;
    this.setAge(age);
    }
    setAge(age) {
        if(age > 0 && age<110) this.#age = age
    }
    setName(name) {
        if(typeof name === 'string') this.#name = name;
    }
    print() {
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
}
const fill = new Person('Fill', 50);
fill.print();
fill.setAge(100);
fill.setName('vasya');
fill.print();

class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = this.#checkName(name);
        this.setAge(age);
    }
    #checkName(name){
        if(name !== 'admin') return name;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
    setAge(age){
        if(age > 0 && age < 115) this.#age = age; 
    }
}
const marusa = new Person('marusa', 50);
marusa.setAge(100);
marusa.print();



class Person{
    #name = "undefined";
    #age = 1;
    constructor(name, age){
        this.#name = this.#checkName(name);
        this.setAge(age);
    }
    #checkName(name){
        if(name!=="admin") return name;
    }
    setAge(age){
        if (age > 0 && age < 110) this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
}
const tom = new Person("Tom", 37);
tom.print();    // Name: Tom  Age: 37



class Person{
    static #retirementAge = 70;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
    static calculateRestAges(person){
        if(this.#retirementAge > person.age){
            const restAges = this.#retirementAge - person.age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }else {
            console.log(`Вы уже на пенсии`)
        };
    };
};
const markus = new Person('Markus', 50);
Person.calculateRestAges(markus);
console.log(Person.#retirementAge);//Private field '#retirementAge' must be declared in an enclosing class


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name:${this.name}, Age ${this.age}`);
    };
};

class Employee extends Person{
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    };
};
const bill = new Person('vasya', 50);
bill.print();
const bob = new Employee('Bob', 100);
bob.print();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    print(){
        console.log(`Name:${this.name}, Age ${this.age}`);
    };
};

class Employee extends Person{
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    };
    print(){
    super.print();
        console.log(`Company:${this.company}`);
    };
};
const bill = new Person('vasya', 50);
bill.print();
const bob = new Employee('tim', 25, 'google');
bob.print();



class Person {
    #name;
    constructor(name, age) {
        this.#name = name;
        this.age = age;
    };
    print(){
        console.log(`Name:${this.#name}, Age ${this.age}`);
    };
};

class Employee extends Person{
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    };
    print(){
    super.print();
        console.log(`Name:${this.#name}, Age ${this.age} Company:${this.company}`);
    };
};
const bill = new Person('vasya', 50);
bill.print();
const bob = new Employee('tim', 25, 'google');
bob.print();

const num = [1,2,3,4];
const array = Array.from(num,(n)=> n*n);
console.log(array);
const name = 'Vasya';
const array = Array.from(name);
console.log(array);

const vegetables = ['морковь', 'броколли', 'капуста'];

console.log(`vegetables:${vegetables.length}`);

vegetables.forEach (function(value){
    console.log(value);
});



const vegetables = ['морковь', 'броколли', 'капуста', ,];

console.log(`vegetables:${vegetables.length}`);

for(i=0; i<vegetables.length; i++)
console.log(vegetables[i]);
console.log(vegetables[3]);

const vegetables = ['морковь', 'броколли', 'капуста'];
console.log(...vegetables);



const vegetables = ['морковь', 'броколли', 'капуста'];
console.log(vegetables);
const users = [...vegetables];
console.log(users);
const users1 = Array.of(...vegetables);
console.log(users1);
// [ 'морковь', 'броколли', 'капуста' ]
// [ 'морковь', 'броколли', 'капуста' ]
// [ 'морковь', 'броколли', 'капуста' ]
const men = ["Tom", "Sam", "Bob"];
const women = ["Kate", "Alice", "Mary"];
const people = [...men, ...women];
console.log(people);


const people = ["Tom", "Sam", "Bob",,];
print=(first, second, third)=>{
    console.log(first);
    console.log(second);
    console.log(third);
}
print(...people);
console.log(people[3]);
// Tom
// Sam
// Bob
sum = (a, b, c) =>{
    const e = a + b + c;
    console.log(e);
}
sum(10,10,10);
const nums = [50, 50, 50];
sum(...nums);


const people1 = ["Tom", "Sam", "Bob", "Mike"];
const people2 = ["Alex", "Bill"];
print=(first, second, third)=>{
    console.log(first);
    console.log(second);
    console.log(third);
}
print(...people1);
print(...people2);
/*
Tom
Sam
Bob
Alex
Bill
undefined
*/
const people = ["Sam", "Tom", "Bob"];
const employee = [...people];
employee[0] = 'Valya';
console.log(people);
console.log(employee);

const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
const employee = [...people];
employee[0] = {name:'Vasya'};
console.log(people);
console.log(employee);
// [ { name: 'Sam' }, { name: 'Tom' }, { name: 'Bob' } ]
// [ { name: 'Vasya' }, { name: 'Tom' }, { name: 'Bob' } ]



const users = ["Tom", "Sam", "Bill"];
const people = users.slice();
console.log(users);
people[1]='gail';
console.log(people);

const users = ["Tom", "Sam", "Bill"];
const people = [...users];
console.log(users);
people[1]='gail';
console.log(people);

const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const people = users.slice(1,3);
people.push('dima');
console.log(users);
people[1]='gail';
console.log(people);

const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const people = users.slice(1,3);
people.pop();
console.log(users);
people[1]='gail';
console.log(people);

const people = ["Tom", "Sam", "Bob", "Mike"];
const bla = people.shift();
console.log(bla);
console.log(people);

const people = ["Tom", "Sam", "Bob", "Mike"];
const bla = people.unshift('geogy');
console.log(bla);
console.log(people);

const people = ["Tom", "Sam", "Bob", "Mike"];
const deleted = people.splice(1,2,'ann', 'vasya');
console.log(people);
console.log(deleted);


const people = ["Tom", "Sam", "Bob", "Mike"];
const peoples = ["Alice", "Kate"];
const women = people.concat(peoples);
console.log(women);


const people = ["Tom", "Sam", "Bob", "Mike"];
const to = people.join(';');
console.log(to);

const nums = [50, 1, 100, -5];
const age = nums.sort((a,b)=>a-b);
console.log(age);


const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
console.log(people.includes('Bob'));

const numbers = [ 1, 2, 3, 4, 5, 6];
numbers.forEach(n =>
    console.log('Квадрат числа', n, n*n)
);


const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
const simplePeople = people.flat(2);
console.log(simplePeople);
    
// Наследование
class Team extends Array{
    constructor(name,...members) {
        super(...members);
        this.name = name;
    }
}
const ralmadrid = new Team("Barcelona", "Tom", "Sam", "Bob");
console.log(ralmadrid);
for (const bo of ralmadrid)
console.log(bo);
ralmadrid.push('youla');
ralmadrid.splice(1,1);
console.log(ralmadrid);


class Team extends Array{
    constructor(name,...members) {
        super(...members);
        this.name = name;
    }
    push(person){
        if(person !== 'admin') super.push(person);
    }
}
const ralmadrid = new Team("Barcelona", "Tom", "Sam", "Bob");
ralmadrid.push('boba');
console.log(ralmadrid);

const vasya = "vasya ";
console.log(`В троке ${vasya.length} символов`);
console.log(vasya.repeat(3));


const hello = "привет мир. пока мир";
const cut = hello.slice(1,3);
console.log(cut);
console.log(hello.toUpperCase());
console.log(hello.charAt(2));

const beforeDelete = '   Vasya love eat    ';
console.log(beforeDelete.length);
const afterDelete = beforeDelete.trim();
console.log(afterDelete.length);


let kor = 'Hello';
const lol = ' World';
kor = kor.concat(lol);
console.log(kor);


let hello = "Добрый день";
hello = hello.replace('день', 'вечер');
console.log(hello);

let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
menu = menu.replaceAll('чай', 'бургер');
console.log(menu);


let message = "Сегодня была прекрасная погода";
message = message.split(' ');
console.log(message);

let message = "Сегодня была прекрасная погода";
message = message.padEnd(10);
console.log(message.length);




let initialText = 'Hello World';
const exp = /hello/i;
const result = exp.test(initialText);
console.log(result);

let initialText = 'Hello World';
const exp = /hello/i;
const result = exp.exec(initialText);
console.log(result);


let initialText = 'Hello World';
const exp = /[a-z]/i;
const result = exp.test(initialText);
console.log(result);


const initialText = "Сегодня была прекрасная погода";
const exp = /\s/;
const result = initialText.split(exp);
for(const vas of result){
    console.log(vas);
}
result.forEach(value=>console.log(value));


const initialText = "Он пришел домой и сделал домашнюю работу";
const exp = /дом[а-я]*/gi;
const result = initialText.match(exp);
result.forEach(value=>console.log(value));

let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
const exp = /ЧАЙ/gi;
const result = menu.replace(exp,'капучино');
console.log(result);

let phoneNumber = "+1-234-567-8901";
let myExp = /\+\d-\d{3}-\d{3}-\d{4}/;
phoneNumber = phoneNumber.replace(myExp,'89923498227');
console.log(phoneNumber);

let initialText = "Языки обучения: Java, JavaScript, C++";
let exp = /\bJAVA\b/gi;
initialText = initialText.replaceAll(exp, 'C#');
console.log(initialText);


let initialText = '<img src= "picture.png" />'; 
let exp = /\[a-z]\.(png|jpg)/i;
let result = initialText.match(exp);
result.forEach(function(value=>console.log(value));

const stringToNumber = function(str){
    let num = '56';
    let result = parseInt(num);
    console.log(result);
    console.log(typeof(num));
    return null;
  }
  stringToNumber();

let num = '56';
let result = parseInt(num);
console.log(result);
console.log(typeof(result));

function makeNegative(num) {
    if(num > 0) console.log(num);
  }
  makeNegative(50);




function makeNegative(num) {
    if(num >0) num *=-1; 
    else if(num < 0)return num;
    function
  }

  function between(a, b) {
    return (a,b).forEach(array=>{
        console.log(array);
    })
  }
  between();


  function between(a, b) {
    let arr =[];
    for(i=a;i<=b;i++){
      arr.push[i];
    }
  return arr;
}
between(1,2);

function booleanToString(b){
    if(typeof b === 'string')return String(b);
    else if(typeof b !== 'string')console.log(`Ошибка`);
  }
booleanToString(5);

function defineSuit(card) {
    if(card.includes('3♣'))return 'clubs';
    if(card.includes('3♦'))return 'diamonds';
    if(card.includes('3♥'))return 'hearts';
    if(card.includes('3♠'))return 'spades';
}
function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
    }

    function noSpace(x){
        let vasya = x.trim();
        console.log(vasya.length);
      }
noSpace('Vasya');



function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n <0).reduce((a,b)=>a-b), 0] : [];
    
}

<<<<<<< HEAD
umnogh = (a,b) =>{
    console.log(a*b);
}
umnogh(5,10);

fullName = (name, sirName, age)=>{
    console.log(`Привет ${name} ${sirName}, тебе ${age} лет?`);
}
fullName('Vasya', 'Konovalov', 24);

const company = {
    [Symbol('Tom')]:'senior',
    [Symbol('Tom')]:'junior',
    [Symbol('Sam')]:'junior',
}
const developers = Object.getOwnPropertySymbols(company);
for(const developer of developers){
    console.log(`${developer.toString()} - ${company[developer]}`);
}




  
=======

function binToDec(bin){

}
 

function binToDec(bin){
    return parseInt(bin, 2);
  }
binToDec('1dff');

de =(bins)=>{
    console.log(-Math.abs(bins));
}
de(1);

de =(max, min)=>{
    console.log(Math.max(max, min));
}
de(19,25);

de =(bins)=>{
    console.log((Math.round(bins*100)/100)) + Number.EPSILON;
}
de(1.56);


de =(bins, bims)=>{
    console.log(Math.pow(bins, bims));
}
de(2,5);

let x = Math.random(5,10);
console.log(x);


de =(bins)=>{
    console.log(Math.sqrt(bins));
}
de(25);

de =(bins)=>{
    console.log(Math.log(bins));
}
de(25);

let x = isNaN(25);
console.log(x);

let x = parseFloat('25.15');
console.log(typeof x);

let x = parseInt('25');
console.log(typeof x);


//Округление
globalThis =(num = +Number.EPSILON) =>{
    let nums = (Math.round(num * 100) / 100).toFixed(1);
    console.log(nums);
}
globalThis(1.55);




let a = 5.09;  
a.toFixed(2);
console.log(a);

const company = {
    [Symbol('Tom')]:'senior',
    [Symbol('Tom')]:'junior',
    [Symbol('Sam')]:'junior',
}
const developers  = Object.getOwnPropertySymbols(company);
for(developer of developers){
    console.log(`${developer.toString()}-${company[developer]}`);
}



>>>>>>> 2e221f46137068b540742edbc4dbf1bae141bfa3

const tom = {
    name: 'Tom',
}
const handler = {};
const proxy = new Proxy(tom, handler);
console.log(proxy.name);//Tom

const target = {
    name:'Nika Moseeva',
}
const handler = {
    get: function(target, prop, receiver){
        return 'Vasya Konovalov';
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);


const target = {
    name:'Nika Moseeva',
}
const handler = {
    get: function(target, prop, receiver){
        return 'Name: ' + target.name;
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);




const target = {
    name:'Nika Moseeva',
}
const handler = {
    get: function(target, prop, receiver){
        return target[prop];
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);
console.log(proxy.age);


const target = {
    name:'Nika Moseeva',
    age:21,
}
const handler = {
    get: function(target, prop, receiver){
        if('name'===prop)
        return target.name.toUpperCase();
        else
        return target[prop];
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);
console.log(proxy.age);



const target = {
    name:'Nika Moseeva',
    age:21,
};
const handler = {
    set: function(target, prop, value){
    if('age'===prop && value < 1){
        console.log(`${target.name}, you write wrong value`);
    }else
        return target[prop] = value;
    }
}
const proxy = new Proxy(target, handler);
proxy.name = 'VAaysa';
proxy.age = -50;
console.log(proxy.age);
console.log(proxy.name);



// Конструкция try..catch..finally
callSomeFunc();
console.log(`Остальные функции`);
try { 
callSomeFunc();
console.log(`End block try`);
}
catch{
    console.log(`Error`);
}
finally{
    console.log(`Another instruction`);
}

try { 
    callSomeFunc();
    console.log(`End block try`);
    }
    catch{
        console.log(`Error`);
        
    }
    finally{
        console.log(`Another instruction`);
    }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if(age < 0)throw 'Age must be positive ';
    }
    print() {
        console.log(`Name:${this.name}, Age:${this.age}`)
    };
}

try{
const person = new Person('Vasya', - 100);
person.print();
}
catch(error){
    console.log(error);
    console.log(`An error has occurred`);
}
finally{
    console.log(`If there is a mistake, then it is bad`);
}

try{
    throw `Непредвиденная ошибка!`;
}
catch(error) {
    console.log(error);
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if(age < 0)throw 'Age must be positive ';
    }
    print() {
        console.log(`Name:${this.name}, Age:${this.age}`)
    };
}

try{
const person = new Person('Vasya',  100);
person.print();
}
catch(error){
    console.log(error.message);
    console.log(`An error has occurred`);
}
finally{
    console.log(`If there is a mistake, then it is bad`);
}



class Person {
    constructor(pName, pAge) {
        const age = parseInt(pAge);
        if(isNaN(age)) throw new TypeError ('Возраст должен представлять число');
        if(age < 0 || age > 120) throw new RangeError ('Возраст должен быть больше 0 и меньше 120');
        this.name = pName;
        this.age = age;
}
    print() {
        console.log(`Name:${this.name}, Age:${this.age}`)
    };
}

try{
const person = new Person('Vasya',  -100);
person.print();
}
catch(error){
    console.log(error.message);
    console.log(`An error has occurred`);
}
finally{
    console.log(`If there is a mistake, then it is bad`);
}


class Person {
    constructor(pName, pAge) {
        const age = parseInt(pAge);
        if(isNaN(age)) throw new TypeError ('Возраст должен представлять число');
        if(age < 0 || age > 120) throw new RangeError ('Возраст должен быть больше 0 и меньше 120');
        this.name = pName;
        this.age = age;
}
    print() {
        console.log(`Name:${this.name}, Age:${this.age}`)
    };
}
try {
    let tom = new Person('Vasya', -120);
    let vasya = new Person('Vasya', 'axaxa');
}
catch(error){
    if(error instanceof TypeError){
        console.log(`Возраст должен представлять число`);
    }else if(error instanceof RangeError){
        console.log(`Недопустимое значение`);
    }
    console.log(error.message);
}



// class PersonError extends Error{
//     constructor(value, ...params) {
//         super(...params);
//         this.name = 'PersonError';
//         this.argument = value;
//     }
// }

// class Person {
//     constructor(pName, pAge) {
//         const age = parseInt(pAge);
//         if(isNaN(age)) throw new PersonError (pAge,'Возраст должен представлять число');
//         if(age < 0 || age > 120) throw new PersonError(pAge,'Возраст должен быть больше 0 и меньше 120');
//         this.name = pName;
//         this.age = age;
// }
//     print() {
//         console.log(`Name:${this.name}, Age:${this.age}`)
//     };
// }
// try {
//     let tom = new Person('Vasya', -120);
//     let vasya = new Person('Vasya', 'axaxa');
// }
// catch(error){
//     if(error instanceof PersonError){
//         console.log(`Ошибка типа Person. Неккоректное значение:`, error.argument);
//     } 
// }

class PersonError extends Error{
    constructor(value,...params) {
        super(...params);
        this.name = 'PersonError';
        this.argument = value;
    }
}
class Person{
    constructor(pName, pAge) {
        const age = parseInt(pAge);
        if(isNaN(age)) throw new PersonError(pAge,"Возраст должен представлять число" );
        if(age < 120 || age < 0) throw new PersonError(pAge, "Возраст должен быть больше 0 и меньше 120" );
        this.name = pName;
        this.age = age;  
    }
    print(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
try{
    const Tom = new Person('Tom', -150);
}
catch(error){
    if(error instanceof PersonError){
        console.log(`Вы ввели неправильное значение`, error.argument);
    }
    console.log(error.message);
}


const myPromise = new Promise(()=>{
    console.log(`Выполнение асинхронной операции`);
});

const myPromise = new Promise((resolve, reject)=>{
    console.log(`Выполнение асинхронной операции`);
});

const myPromise = new Promise((resolve)=>{
    console.log(`Выполнение асинхронной операции`);
    resolve('Hello World');
})

const myPromise = new Promise((reject)=>{
    console.log(`Выполнение асинхронной операции`);
    reject('Переданы неверные данные');
});

const x = 4;
const y = 1;
const myPromise = new Promise((resolve, reject)=>{
    if(y===0){
        console.log(`Переданы некорректные данные`)
    }else{
    const z = x/y;
    resolve(z);
    }
});


const myPromise = new Promise((resolve)=>{
    console.log(`Выполнение асинхронной операции`);
    resolve(' Hello World!');
});
myPromise.then((value)=>{
    console.log(`Из промиса получены данные:${value}`);
});

const x = 4;
const y = 8;
const myPromise = new Promise((resolve)=>{
    console.log(`Выполнение асинхронной операции`);
    const z = x + y;
    console.log(`Результат операции : ${z}`);
});
myPromise.then();

const myPromise = Promise.resolve('Hello world');
myPromise.then((value)=>{console.log(value)});

sum=(x,y)=>{
    return new Promise((resolve)=>{
        const result = x + y;
        console.log(result);
        resolve(result);
    })
}
sum(3,5).then((value)=>{console.log(`Результат операции: ${value}`)});
sum(25,4).then((value)=>{console.log(`Результат операции: ${value}`)});

sum = (x, y)=>{
    return new Promise((resolve)=>{
        const result = x + y;
        // console.log(result);
        resolve(result);
    }).then(value=>console.log(`Результат операции: ${value}`));
}
sum(3,5);


sum = (x, y, func)=>{
    if(func === undefined) func = (value)=>{console.log(`Результат операции: ${value}`)};
    return new Promise((resolve)=>{
        const result = x + y;
        resolve(result);
    }).then(func);
};
sum(3,50);
sum(10, 50, (value)=>{console.log(`Summa:${value}`)});


const myPromise = new Promise((resolve, reject)=>{
    console.log(`Выполнение асинхронной операции`);
    getSomeWork();
    reject(`Переданы некорректные данные`);
});
myPromise.catch((error)=>{
    console.log(error);
});

const myPromise = new Promise((resolve, reject)=>{
    console.log(`Выполнение асинхронной операции`);
    const parsed = parseInt('Vasya');
    if(isNaN(parsed)){
        throw 'Not a number';
    }resolve(parsed);
});
myPromise.catch((error)=>{
    console.log(error);
})

getNumber=(str)=>{
    const parsed = parseInt(str);
    if(isNaN(parsed)) throw 'Not a number';
    else return parsed;
}

const myPromise = new Promise((resolve, reject)=>{
    console.log(`Выполнение асинхронной операции`);
    const  result = getNumber('Hello');
    console.log(result);
});
myPromise.catch((error)=>{
    console.log(error);
});


const myPromise = new Promise((resolve, reject)=>{
    try{
        console.log(`Выполнение асинхронной операции`);
        getSomeWork();
        resolve('Hello');
    }
    catch(err){
        reject(`Произошла ошибка: ${err.message}`);
    }
});
myPromise.catch((error)=>{
    console.log(error);
});


genetateNumber = (str)=>{
    return new Promise((resolve, reject)=>{
        const parsed = parseInt(str);
        if(isNaN(parsed)) reject (`Значение не является числом`)
        else resolve(parsed);
    })
    .then(value=>{
        console.log(`Результат операции: ${value}`);
    },
    function (error){
        console.log("Возникла ошибка:", error);
    })
    
};
genetateNumber(2, 5);
genetateNumber('VAsya');

new Promise(resolve=>resolve('Hello'))
.then(value=>value+('World'))
.then(value=>value+('!'))
.then(finalValue=>console.log(finalValue));


genetateNumber=(str)=>{
    return new Promise ((resolve, reject)=>{
        const parsed = parseInt(str);
        if(isNaN(parsed)) reject('Not a number');
        else resolve(parsed);
    });
};
printNumber=(str)=>{
    genetateNumber(str)
    .then(value=>{
        if(value ===4) throw('Unlucky number');
        else return value*value;
    })
    .then(finalValue=>console.log(`Result: ${finalValue}`))
    .catch(error=>{
        console.log(error);
        return 0;
    })
    .then(value=>console.log(`Status code :${value}`))
    .finally(()=>console.log(`End`))
    .then(()=>console.log(`Промис все еще работает`));
    
};
printNumber('Vasya');
printNumber('125');
printNumber('4');


const promise1 = new Promise((resolve,reject)=>{
    reject('Error Непридвиденная');
    setTimeout(resolve, 1000, 'Vasya');
   
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, 'Nika');
});
Promise.all([promise1, promise2])
    .then(value=>{
        const [promise1data, promise2data] = value;
    console.log(promise1data, promise2data);
    })
    .catch(error=>{console.log(error)});
//


const promise1 = new Promise((resolve,reject)=>{
    reject('Error Непридвиденная');
    setTimeout(resolve, 1000, 'Vasya');
   
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, 'Nika');
});
Promise.allSettled([promise1, promise2])
    .then(value=>{
        const [promise1data, promise2data] = value;
    console.log(promise1data);
    console.log(promise2data);
    })
    .catch(error=>{console.log(error)});
//


const promise1 = new Promise((resolve,reject)=>{
    reject('Error Непридвиденная');
    setTimeout(resolve, 1000, 'Vasya');
   
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, 'Nika');
});
Promise.race([promise1, promise2])
    .then(value=>{
        const [promise1data, promise2data] = value;
    console.log(promise1data);
    console.log(promise2data);
    })
    .catch(error=>{console.log(error)});
//


const promise1 = new Promise((resolve,reject)=>{
    // reject('Error Непридвиденная');
    setTimeout(resolve, 1000, 'Vasya');
   
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, 'Nika');
});
Promise.any([promise1, promise2])
    .then(value=>{console.log(value);
    })
    .catch(error=>{console.log(error)});
//


const promise1 = new Promise((resolve,reject)=>{
    reject('Error Непридвиденная');
    setTimeout(resolve, 1000, 'Vasya');
   
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, 'Nika');
    reject('Error Непридвиденная2');
});
Promise.any([promise1, promise2])
    .then(value=>{console.log(value);
    })
    .catch(e=>{console.log(e.errors)});//[ 'Error Непридвиденная', 'Error Непридвиденная2' ]


sum = (x, y)=>{
    return new Promise((resolve, reject)=>{
        const result = x + y;
        resolve(result);
    });
};
sum(3,10).then(value=>console.log(value));


sum = (x, y)=>{
    return new Promise((resolve, reject)=>{
        const result = x + y;
        resolve(result);
    });
};
async function calculate(){
    const value = await sum(5,20);
    console.log(`Value:${value}`);
};
calculate();

sum = (x, y)=>{
    return new Promise((resolve, reject)=>{
        const result = x + y;
        resolve(result);
    });
};
async function calculate(){
    const value1 = await sum(5,20);
    console.log(`Value:${value1}`);
    const value2 = await sum(5,100);
    console.log(`Value:${value2}`);
};
calculate();

sqrt =(str)=>{
    return new Promise((resolve, reject)=>{
        const n = parseInt(str);
        if(isNaN(n))reject('Not a number');
        else resolve(n*n)
    });
};
async function calculate(str){
    try{
        const value = await sqrt(str);
        console.log(`Value:${value}`);
    }
    catch(error){
        console.log(error);
    }
};
calculate('100');
calculate(10);

const dataSource = ['tom', 'sam', 'bob'];
async function readData(){
    for await(const item of dataSource){
        console.log(item);
    }
}
readData();


const generatePerson = {
    [Symbol.asyncIterator](){
        return {
            index: 0,
            people: ['Tom', 'Sam', 'Vasya'],
            next(){
                if(this.index<this.people.length){
                    return Promise.resolve({value: this.people[this.index++], done: false});
                }
                return Promise.resolve({done: true});
            }
        }
    }
}
async function printPerson() {
    for await (const people of generatePerson){
        console.log(people);
    }
}
printPerson();

async function* generatePersonAsync(){
    yield 'Vasya';
}
const generatePerson = generatePersonAsync();
generatePerson.next()
.then(data=>console.log(data.value));

async function* generatePersonAsync(){
    yield 'Vasya';
}
const generatePerson = generatePersonAsync();
generatePerson.next()
.then(data=>console.log(data));

async function* generatePersonAsync(){
    yield 'Vasya';
    yield 'Nika';
    yield 'Sam';
}
async function printPeopleAsync(){
    const personGenerator = generatePersonAsync();
    while(!(person = await personGenerator.next()).done){
        console.log(person.value);
    }
}
printPeopleAsync();

async function* generatePersonAsync(){
    yield 'Vasya';
    yield 'Nika';
    yield 'Sam';
}
async function printPeopleAsync(){
    const personGenerator = generatePersonAsync();
    for await(people of personGenerator){
        console.log(people);
    }
}
printPeopleAsync();

async function* generatePerson(people){
    for(const persons of people)
    yield await new Promise(resolve => setTimeout(() =>resolve(persons), 3000))
}
async function printPeopleAsync(people){
    for await(const items of generatePerson(people)){
        console.log(items);
    }
}
printPeopleAsync(['tom', 'sam', 'bob']);

const x = 4;
const y = 8;
const myPromise = new Promise(function(){
    console.log(`dfgfd`);
    const z = x+ y;
    console.log(`gfgfg ${z}`)
})
myPromise.then();

const myPromise = Promise.resolve('gfg');
myPromise.then(value=>console.log(value));


sum = (x, y, func) =>{
    if(func===undefined)func = function(value){console.log(value)}
    return new Promise(function(){
        const result = x + y;
        
    })
}

 


    
    





























    





















    





















































