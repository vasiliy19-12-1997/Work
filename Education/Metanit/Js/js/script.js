"use strict";
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
    };
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
// Стрелочная функция
let hello = ()=>console.log("Vasya");
hello();
// Передача параметров
let pringles = (mes)=>console.log(mes);
pringles("Hello vasya");
// Возвращение результата
let sum = (x,y)=>x + y;
console.log(sum(1,2));
console.log(sum(3,4));
// Другой пример - возвратим отфарматированную строку:
const hellos = name =>`Hello, ${name}`;

console.log(hellos('Tom'));
console.log(hellos('Vasya'));
console.log(hellos('frodo begins'));
// Функция из нескольких инструкций
// Выше в примерах все стрелочные функции имели только одну инструкцию. Если же функция должна выполнять больше действий, то они, как и в обычной функции, заключаются в фигурные скобки:

const square = n=> {
    let result = n* n;
    console.log(result);
};

square(5);//25
// А если надо возвратить результат, применяется оператор return, как в обычной функции:
const squares = n => {
    let result = n * n;
    return result;
};

console.log(squares(5));









// Объектно-ориентированное программирование

// Создание нового объекта
// Есть несколько способов создания нового объекта.

// Первый способ заключается в использовании конструктора Object:
// let user = new Object();

let user =  {};
user.name = 'Vasya';
user.age = 25;
console.log(user.name);

// еще способо присвоения
let users = {
    name: "Vasya",
    age: 25
};
console.log(`Hello ${users.name}`);
// В данном случае названия переменных также являются и названиями свойств объекта. И таким образом можно создавать более сложные конструкции:
let names = 'Tom';
let age = 34;
let userers = {names,age};

let teachers = {userers, course: "Java Script"};
console.log(teachers.userers);
console.log(teachers.course);

// Методы объекта
// Методы объекта определяют его поведение или действия, которые он производит. Методы представляют собой функции. Например, определим метод, который бы выводил имя и возраст человека:
let userVasya = {};
userVasya.name = 'Tom';
userVasya.age = 26;
userVasya.display = function(){
    console.log(userVasya.name);
    console.log(userVasya.age);
};

userVasya.display();
// Как и в случае со свойствами, методу присваивается ссылка на функцию с помощью знака двоеточия.

// Чтобы обратиться к свойствам или методам объекта внутри этого объекта, используется ключевое слово this. Оно означает ссылку на текущий объект.

// Также можно использовать сокращенный способ определения методов, когда двоеточие и слово function опускаются:
let userNika = {
    name:"Tom",
    age:34,
    display(){
        console.log(this.name, this.age);
    },
    // тут мы добавили новый объетк внутри дали place и просто вывели в консоль
    move(place){
        console.log(this.name, 'goes to', place);
    }

};
userNika.display();
userNika.move("the shop");

// Синтаксис массивов
// Существует также альтернативный способ определения свойств и методов с помощью синтаксиса массивов:
// let user = {};
// user["name"] = "Tom";
// user["age"] = 26;
// user["display"] = function(){
     
//     console.log(user.name);
//     console.log(user.age);
// };
 
// // вызов метода
// user["display"]();
// Также можно определить свойства и методы через синтаксис массивов напрямую при создании объекта:
let user = {
    ["name"]: "Tom",
    ["age"]: 26,
    ["display"]: function(){
      
        console.log(user.name);
        console.log(user.age);
    }
};
user["display"]();
// С одной стороны, разницы никакой нет между двумя определениями. С другой стороны, бывают случаи, где заключение названия в строку могут помочь. Например, если название свойства состоит из двух слов, разделенных пробелом:


let user = {
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    "display info": function(){
     
        console.log(user.name);
        console.log(user.age);
    }
};
console.log(user["full name"]);
user["display info"]();
// Только в этом случае для обращении к подобным свойствам и методам мы должны использовать синтаксис массивов.
// Динамическое определение имен свойств и методов
const prop1 = 'name';
const prop2 = 'age';
let tom = {
    [prop1]: 'Tom',
    [prop2]: '32'
};
console.log(tom);
console.log(tom.name);
console.log(tom.age);
// Благодая этому, например, можно динамически создавать объекты с произвольными названиями свойств:
function createObject (propName, propValue){
    return {
        [propName] : propValue,
        print(){
            console.log(`${propName} : ${propValue}`);
        }
    };
}
let person = createObject('tom', 34);
person.print();

let book = createObject('Js', 'The Best');
book.print();
// Удаление свойств
// delete объект.свойство
// delete объект["свойство"]
// Константные объекты
// Возможно, нам поребуется, чтобы объект нельзя было изменить, то есть сделать константным. Однако просто определить его как обычную константу с помощью оператора const недостаточно. Например:
const persons = {name:'tom', age:37};
persons.name = 'Bob';
console.log(persons.name);//Bob Свойтсва объекта мы можем изменять

const personss = {name:'Vasya', age:37};
personss = {name:'Karl', age:40};//нельзя поменять значение константы

// Заморозили изменение контсанты
const personс = {name:'tom', age:37};
Object.freeze(personс);
personс.name = 'Bob';
console.log(personс.name);
// Создание объекта из переменных и констант
function getSalary(status){
    if(status==='senior') return 1500;
    else return 500;
}
// const name = 'Tom';
// const age = 37;
// const person1 = {name:name, age:age, salary: getSalary};
// console.log(person1);

// const name = 'Tom';
// const age = 37;
// const salary=500;
// const person1 = {name,age,salary};
// console.log(person1);
// То же самое относится к передаче функций методам объекта:
function display(){
    console.log(this.name, this.age);
}
// const move = function(place){console.log(this.name, "goes to", place);};
// const name = "Tom";
// const age = 37;
// const salary = 500;
// const person = { name, age, salary, display, move};

// person.display();
// person.move("cinema");

const moves =(place)=>{console.log(this.name2, 'goes to', place); console.log(this);};
const name2 = 'Tom';
const person3 = {name2, moves};
person3.moves('cinema');//undefined goes to cinema
{}
// Фукция Object.fromEntries()
const personData = [['name', 'Tom'],['age', 37]];
const personq = Object.fromEntries(personData);
console.log(personq);
console.log(personq.name);
console.log(personq.age);
// Вложенные объекты и массивы в объектах
// Одни объекты могут содержать в качестве свойств другие объекты. Например, есть объект страны, у которой можно выделить ряд свойств. Одно из этих свойств может представлять столицу. Но у столицы мы также можем выделить свои свойства, например, название, численность населения, год основания:
let country = {
    name: 'Germany',
    language: 'French',
    capital:{
        name: 'Berlin',
        population: 50,
        year: 1237
    }
};
console.log('dfdf'+ country.capital.name);//лучше так писать
console.log('dfdf'+ country['capital']['population']);
console.log('dfdf'+ country.capital['population']);

// Для доступа к свойствам таких вложенных объектов мы можем использовать стандартную нотацию точки:


// country.capital.name
// Либо обращаться к ним как к элементам массивов:


// country["capital"]["population"]
// Также допустим смешанный вид обращения:


// country.capital["year"]

// В качестве свойств также могут использоваться массивы, в том числе массивы других объектов:
let countryBest = {
    name:'Shedsh',
    languages: ['Russian', 'German', 'English'],
    capital:{
        name: 'Bern',
        population: 500
    },
    cities: [
        { name: "Цюрих", population: 378884},
        { name: "Женева", population: 188634},
        { name: "Базель", population: 164937}
    ]
};
for( let i=0; i < countryBest.languages.length; i++){
    console.log(countryBest.languages[i]);
}

for( let i=0; i <countryBest.cities.length; i++){
    console.log(countryBest.cities[i].name);
}
// Копирование объектов
// В отличие от данных примитивных типов данные объектов копируются по ссылке. Что это значит? Рассмотрим следующий пример:
const tom1 = {name: 'Tom'};
const bob1 = tom1;
// проверяем свойство name у обоих констант
console.log(tom1.name);
console.log(bob1.name);
// меняем свойство name у константы bob
bob1.name= 'Bob';
// проверяем что будет
console.log(tom1.name);
console.log(bob1.name);
// Вначале определяется обычный объект tom с одним свойством name. Затем присваиваем значение этого объекта константе bob

// const bob = tom;
// В данном случае константа bob получае ссылку или условно говоря адрес константы tom, поэтому после этого присвоения обе константы по сути указывают на один и тот же объект в памяти. Соответственно изменения, произведенные через одну константу:


// bob.name = "Bob";
// Затронут и другую константу - tom:

// console.log(tom.name);  // Bob\
// Более того, добавим к объекту новое свойство через одну из констант:
const tom2 = {name: 'Tom'};
const bob2 = tom2;

bob2.age = 40;
console.log(tom2.age);
// Что же если мы хотим скопировать из свойства объекта, но при этом обе константы или переменных указывали бы на совершенно разные объекты, изменения одного из которых никак бы не затрагивали другой? В этом случае мы можем воспользоваться встроенным методом Object.assign().
const tom3 = {name:'Vasya', age:50};
const bob3 = Object.assign({}, tom3);
bob3.name = 'Bob';
bob3.age = 60;

console.log(`Объект tom3.Name:${tom3.name} Age: ${tom3.age}`);
console.log(`Объект bob3.Name:${bob3.name} Age:${bob3.age}`);

// Копирование из нескольких объектов
// Подобным образом можно копировать данные из нескольких объектов:
const tom4 = {name:'Vasya'};
const sam = {age: 40};
const person4 = {height: 170};
Object.assign(person4, tom4, sam);
console.log(person4);

// Копирование одноименных свойств
// Если объекты, из которых выполняется копирование, содержат одинаковые свойства, то свойства из последних объектов замещают свойства предыдущих:
// const tom = { name: "Tom", age: 37};
// const sam = { age: 45};
// const person = { height: 170};
// Object.assign(person, tom, sam);
// console.log(person);    // {height: 170, name: "Tom", age: 45}
// Здесь оба объекта - tom и sam содержат свойство age, но в объекте person свойство age равно 45 - значение из объекта sam, потому что копирование из объекта sam произодится в последнюю очередь.

tom = {name: 'Tom', company: {title:'Deus ex:human revolution'}};
const bob = Object.assign({}, tom);
bob.name = 'Bob';
bob.company.title = 'Deus ex Mankied divide';
console.log(tom.name);
console.log(tom.company.title);
// Копирование объекта с помощью spread-оператора
// spread-оператор ... позволяет разложить объект на различные пары свойство-значение, которые можно передать другому объекту.
tom = {name: 'tom', age: 40, game:'skyrim'};
let bob0 = {...tom, name:'bob'};
console.log(tom);
console.log(bob0);
// Как видно из предыдущего примера, обе константы после копирования представляют ссылки на разные объекты, и изменения одного из них никак не затронет другой объект.

// Тем не менее если объекты содержат вложенные объекты, то эти вложенные объекты при копировании опять же по сути будут представлять ссылки на один и тот же объект:

// const tom = { name: "Tom", age: 37, company: {title: "Microsoft"}};
// const bob = {...tom}
// bob.name = "Bob";
// bob.company.title = "Google";
 
// console.log(`${tom.name} - ${tom.company.title}`);  // Tom - Google
// console.log(`${bob.name} - ${bob.company.title}`);  // Bob - Google

// Сравнение объектов
// Сравним два объекта с помощью стандартных операций сравнения и эквивалентности:


// const tom = { name: "Tom"};
// const bob = { name: "Bob"};
// console.log(tom == bob);    // false
// console.log(tom === bob);   // false
// Оба оператора в данном случае возвратят значение false, то есть объекты не равны. Причем даже если значения свойств объектов будет одинаковым, то мы все равно в обоих случаях получим false


// const tom = { name: "Tom"};
// const bob = { name: "Tom"};
// console.log(tom == bob);    // false
// console.log(tom === bob);   // false
// Однако, что будет, если обе константы (переменных) хранят ссылку на один и тот же объект:


// const tom = { name: "Tom"};
// const bob = tom;
// console.log(tom == bob);    // true
// console.log(tom === bob);   // true
// В этом случае в обоих случаях мы получим true, поскольку значения обоих констант равны, так как по сути это одно и то же значение.




// Проверка наличия и перебор методов и свойств
user = {};
user.name = 'Tom';
user.age = 50;
user.print =()=>{console.log(this.name);
console.log(this.age);
};
let hasNameProp = 'name' in user;
// console.log(hasNameProp); 
let hasSkillProp = 'skill' in user;
// console.log(hasSkillProp); 
hasNameProp = user.name ==undefined;
console.log(hasNameProp);
hasSkillProp = user.skill ==undefined;
console.log(hasSkillProp);

let hasNameProp1 = user.hasOwnProperty('name');
console.log(hasNameProp1);


tom = {
    name: 'Vasya',
    age: 24,
    print(){
        console.log(`Name:${this.name} Age:${this.age}`);
    }
};
for(let prop3 in tom){
    console.log(prop3, ' : ', tom[prop3]);
}


// Функции Object.entries, Object.keys, Object,values
// С помощью дополнительных функций Object.entries, Object.keys и Object,values можно получить все свойства (в том числе методы) объекта и их значения.

// Object.entries()
// Функция Object.entries() в качестве параметра принимает объект и возвращает массив пар "название_свойства - значение", где каждая пара свойство-значение представляет массив. Например:
tom = {
    name: 'Vasya',
    age: 24,
    print(){
        console.log(`Name:${this.name} Age:${this.age}`);
    }
};
// for (let prop of Object.entries(tom)){
//     console.log(prop);
// }
// Функция Object.keys() позволяет получить массив названий всех свойств объекта. Например, возьмем выше опредеенный объект tom:
// console.log(Object.keys(tom));
// Соответственно можно перебрать этот набор и получить значения свойств:
for(let prop0 of Object.keys(tom)){
    let value = tom[prop0];
    console.log(prop0, value);
}
// Object.values()
// Функция Object.values() возвращает массив, который содержит все значения свойств объекта:
tom = {
    name: 'Vasya',
    age: 24,
    print(){
        console.log(`Name:${this.name} Age:${this.age}`);
    }
};
console.log(Object.values(tom));



// Объекты в функциях






function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            console.log("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        },
        driveCar: function(car){
            console.log(this.name + " ведет машину " + car.name + "<br/>");
        }
    };
}
 
function createCar(mName, mYear){
    return{
        name: mName,
        year: mYear
    };
}
 tom = createUser("Том", 26);
tom.displayInfo();
let bently = createCar("Бентли", 2004);
tom.driveCar(bently);


// Конструкторы объектов
let vasya = new Object('');
let User = (pName, pAge)=>{
    this.name = pName;
    this.age = pAge;
    this.displayInfo =()=>{
        console.log(`Имя: +${pName} + ; возраст: + ${pAge}`);
    };
};
vasya = new User('Tom', 26);
console.log(vasya.name);
vasya.displayInfo();



// конструктор типа Car
function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        console.log("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
    };
}
// конструктор типа User
class User {
    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
        this.driveCar = function (car) {
            console.log(this.name + " ведет машину " + car.name + "<br/>");
        };
        this.displayInfo = function () {
            console.log("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
        };
    }
    hello() {
        console.log(this.name + " говорит: 'Привет!'<br/>");
    }
}
 
 tom = new User("Том", 26);
tom.displayInfo();
 bently = new Car("Бентли", 2004);
tom.driveCar(bently);



// Оператор instanceof
// Оператор instanceof позволяет проверить, с помощью какого конструктора создан объект. Если объект создан с помощью определенного конструктора, то оператор возвращает true:
tom = new User('Tom', 46);

let isUser = tom instanceof User;
let isCar = tom instanceof Car;
console.log(isUser);
console.log(isCar);


// Расширение объектов. Prototype
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo =()=>{
        console.log(`Имя: " + ${pName} + "; возраст: " + ${pAge}  `);
    };
}
 
User.prototype.maxAge = 110;
 
 tom = new User("Том", 26);
tom.displayInfo();
let john = new User("Джон", 28);
john.hello();
console.log(tom.maxAge); // 110
console.log(john.maxAge); // 110

// В то же время мы можем определить в объекте свойство, которое будет назваться также, как и свойство прототипа. В этом случае собственное свойство объекта будет иметь приоритет перед свойством прототипа:
 User.prototype.maxAge = 500;
 let tom10 = new User('Tom', 55);
 let john10 = new User('Джон', 100);
 tom10.maxAge = 1000;
 console.log(tom10.maxAge);
 console.log(john10.maxAge);


//  Инкапсуляция
// Инкапсуляция является одним из ключевых понятий объектно-ориентированного программирования и представляет сокрытие состояния объекта от прямого доступа извне. По умолчанию все свойства объектов являются публичными, общедоступными, и мы к ним можем обратиться из любого места программы.
 function User0 (name, age) {
    this.name = name;
    let _age = age;
    this.displayInfo =()=>{
        console.log(`Имя + ${name} + возраст + ${_age}`);       
    };
    this.getAge =()=>{
        return _age;
    };
    this.setAge =(age)=>{
        if(typeof age === 'number' && age > 0 && age < 110){
            _age = age;
        }else{
            console.log('Недопустимое значение');
        }
    };   
 } 
 
let nika = new User0 ('Nika', 20);
console.log(nika._age);
console.log(nika.getAge());
// делаем 32 возраст и он меняет
nika.setAge(32);
console.log(nika.getAge());
// делаем строкой и он пишет недопустиемое значение
nika.setAge('50');
console.log(nika.getAge);


// Функция как объект. Методы call и apply
// В JavaScript функция тоже является объектом - объектом Function и тоже имеет прототип, свойства, методы. Все функции, которые используются в программе, являются объектами Function и имеют все его свойства и методы.

// Например, мы можем создать функцию с помощью конструктора Function:
let squarex = new Function('n', 'return n * n');
console.log(squarex(5));
 
display = () =>{
    console.log('привет мир');
};

Function.prototype.program = 'Hello';
console.log(display.program);//hello

// Метод call() вызывает функцию с указанным значением this и аргументами:
let add = (x, y)=>{
    return x + y;
};
let results = add.call(this, 3, 8);
console.log(results);
// this указывает на объект, для которого вызывается функция - в данном случае это глобальный объект window. После this передаются значения для параметров.

// При передаче объекта через первый параметр, мы можем ссылаться на него через ключевое слово this:
function User (name, age) {
    this.name = name;
    this.age = age;
}
 tom = new User("Том", 26);
function display(){
    console.log("Ваше имя: " + this.name);
}
display.call(tom); // Ваше имя: Том

// Если нам не важен объект, для которого вызывается функция, то можно передать значение null:
 add=(x, y)=>{
     
    return x + y;
};
 result = add.call(null, 3, 8);
 
console.log(result); // 11


// На метод call() похож метод apply(), который также вызывает функцию и в качестве первого параметра также получает объект, для которого функция вызывается. Только теперь в качестве второго параметра передается массив аргументов:
add=(x,y)=>{
    return x + y;
};
result = add.apply(null, [3,8]);

console.log(result);




// Наследование
// конструктор пользователя
function User (name, age){
    this.name = name;
    this.age = age;
    this.go = ()=>{
        console.log(`${name} + идет`);
    };
    this.displayInfo = ()=>{
        console.log(`Имя + ${name} + возраст + ${age}`);
    };
}
User.prototype.maxage = 120;
// конструктор работника
 function Employee (name, age, comp) {
    User.call(this, name, age);
    this.company = comp;
    this.displayInfo = () =>{
        console.log(`Имя  ${name}  возраст  ${age}  компания  ${comp}`);
    };
}
Employee.prototype = Object.create(User.prototype);

let misha = new User ('Misha', 100);
let kirill = new Employee ('kirill', 500, 'Google');
misha.go();
kirill.go();
misha.displayInfo();
kirill.displayInfo();
console.log(misha.maxage);





// Ключевое слово this
console.log(this);

// let foo =()=>{
//     let bar = 'bar2';
//     console.log(this.bar);
// };

// let bar = 'bar1';
// foo();


// function foos(){
//     let bars = "bar2";
//     console.log(this.bars);
// }
 
// let bars = "bar1";
//  foos();  // bar1

//  В контексте объекта, в том числе в его методах, ключевое слово this ссылается на этот же объект:
 let o = {
    bar: "bar3",
    foo: function(){
        console.log(this.bar);
    }
};
let bar = "bar1";
o.foo();    // bar3

// Явная привязка
// С помощью методов call() и apply() можно задать явную привязку функции к определенному контексту:
function foo(){
    console.log(this.bar);
}
 
var o3 = {bar: "bar3"}
var bar = "bar1";
foo();  // bar1
foo.apply(o3);
  // bar3

//   Метод bind
// Метод f.bind(o) позволяет создать новую функцию с тем же телом и областью видимости, что и функция f, но с привязкой к объекту o:
 
foo = () => {
    let bar = 'bar3';
    console.log(this.bar);
 };

  o3 = {bar: 'bar3'};
  bar = 'bar1';
  foo();
  let func = foo.bind(o3);
  func();


//   this и стрелочные функции

 person = {
    name: "Tom",
    say:()=> console.log(`Меня зовут ${this.name}`)
};

person.say();   // Меня зовут 




// Мы видим, что значение this.title не определено, так как this как контекст объекта замещается глобальным контекстом. В этом случае нам надо передать подобное значение this.title или весь контекст объекта.


// const school = {
//     title: 'Oxford',
//     courses: ['JS', 'TS', 'Java', 'Go'],
//     printCourses: function(){
//         const that = this;
//         this.courses.forEach (function(course) {
//             console.log(that.title, course);
//         });
//     }
// };

// school.printCourses();


// Стрелочные функции также позволяют решить данную проблему:
const school ={
    title:'Oxfortd',
    courses: ['JS', 'JAVA'],
    printCourses: function(){
        this.courses.forEach((course)=>console.log(this.title,course));
    }
};

school.printCourses();

// Деструктуризация
// Деструктуризация (destructuring) позволяет извлечь из объекта отдельные значения в переменные или константы:
user = {
    name: 'vasya',
    age: 30,
    email:'Wasa',
    phone:'8992'
};
//  let {name, email, age } = user;
//  console.log(name);
//  console.log(age);
//  При деструктуризации объекта переменные помещаются в фигурные скобки и им присваивается объект. Сопоставление между свойствами объекта и переменными/константами идет по имени.

//  Мы можем указать, что мы хотим получить значения свойств объекта в переменные/константы с другим именем:

// const{name: userName, email: mailAdress} = user;
// console.log(userName);
// console.log(mailAdress);

// В данном случае свойство name сопоставляется с переменной userName, а поле email - с переменной mailAddress.
// Также можно задать для переменных/констант значения по умолчанию, если в объекте вдруг не окажется соответствующих свойств:

// const{name = 'Vasyaa', email: mailAddress = 'WASA'} = user;
// console.log(name, mailAddress);

// Если переменная/константа при деструктуризации сопоставляется со свойством, который представляет сложный объект, то после деструктуризации эта переменная/константа также будет представлять сложный объект:

user = {
    name: 'Vasya',
    age: 20,
    account:{
        login: 'Tom',
        password: 123
    }
};
// const {account} = user;
// console.log(account.login);
// console.log(account.password);

// Но если нам мы хотим получить отдельные значения из вложенного сложного объекта, как в примере выше объект account внутри объекта user, то нам необязательно получать весь этот объект - мы также можем для его свойств предоставить отдельные переменные/константы:
let {name, account:{login}} = user;
console.log(login);
// Здесь мы получаем в переменную login значение свойства user.account.login.


// Получение оставшихся свойств объекта с помощью rest-оператора
 tom = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};

const {name, age, ...contacts} = tom;
console.log(name);
console.log(age);
console.log(contacts);
// В данном случае мы раскладываем объект tom на три константы: name, age и contacts. Константы name и age сопоставляются со свойствами объекта tom по имени. А константа contacts получает все оставшиеся несопоставленные свойства объекта. Однако чтобы их получить, перед названием константы указыватся оператор ...: ...contacts. То есть в данном случае константа contacts будет предлагать объект, который будет содержать свойства email и phone объекта tom.

// Стоит отметить, что переменная/константа, которая получает все оставшиеся свойства объекта, всегда будет представлять объект, даже если она получит только одно свойства из объекта.

Деструктуризация массивов
Также можно разложить массивы:

 users = ['tom' , 'sam', 'Vasya'];
let [a, b ,c] = users;
console.log(a);
console.log(`Его зовут ${a}, а его зовут ${b}, а вот этого лучше не знать ${c}`);
// пропуск эоементов
let [,f,g] = users;
console.log(f);
console.log(g);
// Получение оствшихся элементов массива в другой массив
let [jake,... another] = users;
console.log(jake);
console.log(another);


// Деструктуризация объектов из массивов
// Можно совместить получение данных из массива и объекта:
let people = [
    {name: 'Vasya', age:50},
    {name: 'Miha', age:30},
    {name: 'Nika', age:20},
];
let [,, {age}] = people;
console.log(age);

// Деструктуризация параметров
// Если в функцию в качестве параметра передается массив или объект, то его также можно подобным образом разложить на отдельные значения:
function display({name: userName, age:userAge}){
    console.log(userAge, userName);
}
sum =([a, b, c])=>{
    const result = a + b + c;
    console.log(result);
};
user = {name:'dima', age: 50, email: 'wasyok'};
let numbers = [3, 5, 10, 10];
display(user);
sum(numbers);

// Обмен значениями
// Благодаря деструктуризации очень просто стало проводить обмен значениями между двумя переменными:
let first = 'Vasya';
let second = 'Gfisha';
[first, second] = [second, first];
console.log(first);
console.log(second);

// Что упрощает решение ряда задач. Например, используем деструктуризацию для простейшей сортировки массива:
// let nums = [3, 7, 10, 50, 100, 2, 9];
// for( i = 0, i < nums.length, i++)
//     for(j = 0, i < nums.length< j++)
//         if (nums[i] < mums[j]) [nums[j], nums[i] = [nums[i], nums[j]];




// Оператор ?.
// Оператор ?. или optional chaning-оператор позволяет проверить объект и его свойства и методы на null и undefined, и если объект или его свойства/методы определены, то обратиться к его свойствам или методам:

tom = null;
bob = {name:'Bob'};

// let printName = (person)=>{
//    if(person !== null && person !== undefined){console.log(person.name);}
// };
// сокращенная проверка
// let printName = (person)=>{if(person){console.log(person.name);}
// };Если person равен null или undefined, то if(person) возвратит false.

// Однако оператор ?. предлагает более элегантный способ решения:
let printName = (person) => {
    console.log(person?.name);
};

console.log(tom);
console.log(bob);



// Классы
// Поля и свойства класса
// Для хранения данных или состояния объекта в классе используются поля и свойства.

// Итак, выше был определен класс Person, который представлял человека. У человека есть отличительных признаков, например, имя и возраст. Определим в классе Person поля для хранения этих данных:
// class Person {
//     name;
//     age;
// }
// tom = new Person();
// tom.name = 'Vasya';
// tom.age = 40;
// console.log(tom.name);
// console.log(tom.age);

// Поведение класса и его методы
// Кроме хранения данных, которые определяют состояние объекта, класс может иметь методы, которые определяют поведение объекта - действия, которые выполняет объект. Например, определим в классе Person пару методов:
// class Person {
//     name;
//     age;
//     move(){
//         console.log(`${this.name} Go to: ${this.age}`);
//     }
//     eat(){
//         console.log(`Eat apples`);
//     }
// }
// tom = new Person();
// tom.name = 'Vasya';
// tom.age = 50;
// tom.move();

// Как правило, цель конструктора - инициализация объекта некоторыми начальными данными:

// class Person {
//     name;
//     age;
//     // даем начальные значения, можем даже убрать значения полей name и age, смотреть ниже
//     constructor(personName, personAge){
//         this.name = personName;
//         this.age = personAge;
//     }
//     print(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
// }
// tom = new Person('Tom', 50);
// tom.print();
// bob = new Person('Bob', 100);
// bob.print();

// здесь мы убрали name и age из начала
// class Person {
//    constructor(personName, personAge){
//         this.name = personName;
//         this.age = personAge;
//     }
//     print(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
// }
// tom = new Person('Tom', 50);
// tom.print();
// bob = new Person('Bob', 100);
// bob.print();


// Приватные поля и методы
// // В прошлых темах мы использовали класс, свойства и методы которого были досупны извне, и соответственно мы могли к им обратиться в любом месте программы. Например:
// class Person{
 
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     print(){
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// const tom = new Person("Tom", 37);
// tom.name = "Sam";
// tom.age = -45;
// tom.print();    // Name: Sam  Age: -45
// С одной стороны, это замечательно, что мы можем использовать функциональность класса в своей программе, обращаться к его свойствам, методам. Но это может быть источником потенциальных проблем. Как видно в примере выше, мы можем изменить имя человека. Но что, если мы не хотим, чтобы в программе можно было менять начальное имя? Также мы можем изменить возраст человека, но изменить его на любое число, которое может предствлять некорректный возраст (например, отрицательный).

// Иногда необходимо, чтобы к данным или действиям извне класса нельзя было обратиться, и чтобы к ним можно было обращаться только внутри этого же класса. Или иными словами, сделать свойства и методы класса приватными - доступными только для этого класса. И язык JavaScript предоставляет для этого необходимый инструментарий. Для этого название полей и методов должно начинаться с символа решетки #.


// Приватные поля
// class Person {
//     #name;
//     #age;
//     constructor(name, age){
//         this.#name = name;
//         this.#age = age;   
//     }
//     print(){
//         console.log(`Name: ${this.#name} Age:${this.#age}`);
//     }
// }
// tom = new Person ('Tom', 50);
// // tom.#name = 'Sammm';
// tom.print();
// В примере выше определены приватные поля #name и #age. Установить и получить их значение можно только внури класса Person. Вне его они не доступны. Поэтому при попытке обратиться к ним через имя объекта, мы получим ошибку:
// class Person {
//     #name;
//     #age;
//     constructor(name, age){
//         this.#name = name;
//         this.setAge(age);
//     }
//     setAge(age){
//         if(age > 0 && age < 110) this.#age = age;
//     }
//     print(){
//             console.log(`Name: ${this.#name} Age:${this.#age}`);
//             }
// }
// tom = new Person('VASAY', 100);
// tom.print();
// tom.setAge(37);
// tom.print();
// Статические поля
// Статические поля хранят состояния класса в целом, а не отдельного объекта. Перед названием статического поля ставится ключевое слово static. Например:
// class Person {
//     static retirementAge = 65;
//     constructor (name, age){
//     this.name = name;
//     this.age= age;
//     }
//     print(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
// }
// console.log(Person.retirementAge);
// Person.retirementAge = 100;
// console.log(Person.retirementAge);
// // Здесь в классе Person определено статическое поле retirementAge, которое хранит условный возраст выхода на пенсию:
// static retirementAge = 65;
// // Это поле относится ко всему классу Person в целом и описывает состояние всего класса в целом. Ведь, как правило, есть некий общий возраст выхода на пенсию, принтый для всех (не берем в расчет отдельные случаи для отдельных профессий). И поэтому для обращения к статическому полю применяется имя класса, а не имя какого-либо объекта. Используя имя класса, мы можем получить или установить его значение:

// Person.retirementAge = 62;
// console.log(Person.retirementAge); // 62
// При этом мы НЕ можем в нестатических методах и конструкторе класса обращаться к этим полям через this, наподобие следующего:
// print(){ 
//         console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
//         console.log(`Пенсионный возраст: ${this.retirementAge}`);   // к статическому полю нельзя обратиться через this
// }
// Статические методы
// Статические методы, как и статические поля, определяются для всего класса в целом, а не для отдельного объекта. Для их определения перед названием метода ставится оператор static. Например:

// class Person {
//     constructor(name, age){
//     this.name = name;
//     this.age = age;
// }
// print(){
//     console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
//     static printClassInfo(){
//         console.log(`${this.name} Класс Person представляет человека`);
//     }
// }
// Person.printClassInfo();

// У меня не получится обратиться к статичному свойству объкта, например к this.age 
// поэтому я  опеределить в методе параметр, через который в метод будет передаваться объект:
// class Person {
//     constructor(name, age){
//     this.name = name;
//     this.age = age;
// }
//     static print(person){
//         console.log(`Name: ${person.name} Age: ${person.age}`);
//     }
// }
// tom = new Person('Tom', 150);
// bob = new Person('bob', 200);
// Person.print(tom);
// Person.print(bob);
// Однако мы можем использовать в статических методах слово this для обращения к статическим полям и другим статическим методам:

// class Person{
//     // пенсионный возраст 70
//     static retirementAge = 70;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     print(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
//    static calculateRestAges(person){
//        if(this.retirementAge > person.age){
//            const restAges = this.retirementAge - person.age;
//            console.log(`До пенсии осталось ${restAges}`);
//        }
//     }
// }
// tom = new Person('Tom', 50);
// Person.calculateRestAges(tom);

// Приватные статические поля и методы
// Как и обычные поля и методы статические поля и методы могут быть приватными. Такие поля и методы доступны только из других статических методов класса:

// class Person { 
//     static #retirementAge = 50;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     print(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
//     static calculateRestAges(person){
//         if(this.#retirementAge > person.age) {
//             const restAges = this.#retirementAge - person.age;
//             console.log(`До пенсии осталось ${restAges} лет`);
//         }else console.log('Вы уже на пенсии');
//     }
// }
// tom = new Person('Tom', 80);
// Person.calculateRestAges.tom();



// Свойства и методы доступа
// Для опосредования доступа к свойствам класса в последних стандартах JavaScript была добавлена поддержка методов доступа - get и set. Сначала рассмотрим проблему, с которой мы можем столкнуться:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// tom = new Person('Tom', 50);
// console.log(tom.age);
// tom = new Person('Tom', -15);
// console.log(tom.age);

// Чтобы выйти из этой ситуации, мы можем определить приватное поле age, к которому можно было бы обратиться только из текущего класса. А для получения или установки его значения создать специальные методы:

// class Person {
//     #ageValue = 1;
//     constructor(name, age) {
//         this.name = name;
//         this.setAge(age);
//     }
//     getAge(){
//         return this.#ageValue;
//     }
//     setAge(value){
//         if(value > 0 && value < 110) this.#ageValue = value;
//     }
// }
// tom = new Person('Tom', 40);
// console.log(tom.getAge());

// Теперь возраст хранится в приватном поле ageValue. При его установке в методе setAge() проверяется переданное значение. И установка происходит, если только передано корректное значение. А метод getAge() возвращает значение этой переменной.

// Но есть и другое решение - применение методов доступа get и set.




// Свойства, доступные только для чтения
// Выше применялись оба метода get и set, соответственно значение поля можно было и получить, и установить. Однако в реальност мы можем использовать только один из них. Например, мы можем оставить только метод get и тем самым сделать свойство доступным только для чтения.

// Например, в изменим пример выше и сделаем свойство name доступным только для чтения:
// class Person {
//     #age = 1;
//     #name;
//     constructor(name, age) {
//         this.#name = name;
//         this.age = age;
//     }
//     // set name(value){ this.#name = value;
//     get name(){
//         return this.#name;
//     }
//     set age(value){
//         if(value > 0 && value < 110)this.#name = value;
//     }
//     get age(){
//         return this.#age;
//     }
// }
// tom = new Person('Tom', 50);
// console.log(tom.name);

// Свойства только для установки
// Также мы можем сделать свойство доступным только для записи, оставив только метод set. Например, добавим новое свойство id, которое будет доступно только для записи:
class Person {
    #name;
    #age;
    #id;
    constructor(name, age, id) {
        this.#name = name;
        this.#age = age;
        this.#id = id;
    }
    set id(value){
        this.#id = value;
    }
    print(){
        console.log(`id: ${this.#id} name: ${this.#name} age: ${this.#age}`);
    }
}
tom = new Person('Vasua', 50, 5);
tom.print();
tom.id = 100;
tom.print();

// Свойства без обращения к полям
// Стоит отметить, что методы get и set необязательно должны обращаться к приватным или неприватным полям. Это могут быть и вычисляемые свойства. Например:

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;      
    }
    get fullName(){
        return (`${this.firstName} ${this.lastName}`);
    }
}
tom = new Person('Василий', 'Коновалов');
console.log(tom.fullName);

// В данном случае свойство для чтения fullName возращает фактически объединение двух свойств - firstName и lastName.
// Подобным образом можно определить и свойство для записи:

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return(`${this.firstName} ${this.lastName}`);
    }
    set fullName(value){
        [this.firstName, this.lastName] = value.split(' ');
    }
}
tom = new Person('Tom', 'Konovalov');
console.log(tom.fullName);//Tom Konovalov
tom.fullName = 'Vasiliy Ermakov';
console.log(tom.lastName);//Ermakov

// Наследование
class Person {
    name;
    age;
    print(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
    class Employee extends Person{
        company;
        work(){
            console.log(`${this.name} works in ${this.company}`);
        }
    }
tom = new Person();
tom.name = 'Vasya';
tom.age = 100;
console.log(tom.work);
bob = new Employee();
bob.name = 'Bob';
bob.age = 580;
bob.company = 'Yandex';
tom.print();
bob.print();
bob.work();


// Переопределение методов базового класса.
// Производный класс, как и в случае с конструктором, может переопределять методы базового класса. Так, в примере выше метод print() класса Person выводит имя и возраст человека. Но что, если мы хотим, чтобы для работника метод print() выводил также и компанию? В этом случае мы можем определить в классе Employee свой метод print():

class Person {
    constructor (name, age){
    this.name = name;
    this.age = age;
    }
    print(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
    print(){
        super.print();
        console.log(`Company: ${this.company}`);
    }
}
tom = new Employee('Sam', 50, 'YAndex');
tom.print();

// Наследование и приватные поля и методы
// При наследовании стоит учитывать, что производный класс может обращаться к любой функциональности базового класса, кроме приватных полей и методов. Например:

class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name= name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.#name} Age: ${this.#age}`);
    }
}
class Employee extends Person{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    print(){
        super.print();
        console.log(`Company: ${this.company}`);
    }
    work(){
        console.log(`${this.#name} works in ${this.company}`);
    }
}
tom = new Employee();
tom.name = 'Vasya';
tom.work();

<<<<<<< HEAD
// Массивы
// Создание массива и объект Array
 people = [];
 console.log(people);

 people = ['Sam,', 'John', 'Kire'];
 console.log(people);

//  Еще один способ инициализации массивов представляет метод Array.of() - он принимает элементы и инициизирует ими массив:
people = Array.of('John', 'Nika');
console.log(people);
// Можно определить массив и по ходу определять в него новые элементы:
users = [];
users[1] = 'Tom';
users[2] = 'Vasya';
console.log(users[3]);

// Array.from
const array = Array.from('Hello');
console.log(array);//[ 'H', 'e', 'l', 'l', 'o' ]


numbers = [1, 2 , 3, 4];
const array = Array.from(numbers, n=> n * n);
console.log(array);//[ 1, 4, 9, 16 ]

array = Array.from({length:3}, (element, index)=>{
    console.log(element);
    return index;
});
console.log(array);
//undefined
// undefined
// undefined
// [ 0, 1, 2 ]

array = Array.from({length:3,'0':'Tom', '1': 'vasya', '2' : 'Kirill'} ,(element)=>{
    console.log(element);
    return element;
});
console.log(array);
// Tom
// vasya
// Kirill
// [ 'Tom', 'vasya', 'Kirill' ]

// length
// Чтобы узнать длину массива, используется свойство length:

users = ['Tom', 'Kate', 'Jake'];
for(let i=0; i<users.length; i++){
    console.log(users[i]);
}


// Массивы и spread-оператор
users = ["Tom", "Sam", "Bob"];
console.log(...users);


people = ["Tom", "Sam", "Bob"];

let print =(first, second, third)=>{
    console.log(first);
    console.log(second);
    console.log(third);
};
print(...people);


const people1 = ["Tom", "Sam", "Bob", "Mike"];
const people2 = ["Alex", "Bill"];
print =(first, second, third)=>{
    console.log(`${first}, ${second}, ${third}`);
};
print(...people1);
print(...people2);

// Копирование массивов
const people = ["Sam", "Tom", "Bob"];
const employees = [...people];
employees[0] = 'Toms';
console.log(employees);
console.log(people);

// Однако что будет, если мы скопируем массив объектов:
const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
const employees = [...people];
employees[0].name = 'Vasya';
console.log(employees);
console.log(people);

// Однако мы можем полностью заменить элемент одного массива на другой объект, и тогда элемент второго массива по прежнему будет хранить ссылку на старый объект и будет не зависеть от первого массива:
const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
const employees = [...people];
employees[0] = {name:'VAsya'};
console.log(employees);
console.log(people);


// Наследование массивов

// class Team extends Array{
//     constructor(name, ...members){
//         super(...members);
//         this.name = name;
//     }
// }

// const barcelona = new Team('Barcelona', 'Tom');
// console.log(barcelona);

// // перебор массива
// for(const person of barcelona) {
//     console.log(barcelona);
// }

// barcelona.push('tIM');
// console.log(barcelona);
// barcelona.splice(1, 1);
// console.log(barcelona);

class Team extends Array{
    constructor(name, ...members){
        super(...members);
        this.name = name;
    }
    push(person){
    if(person !== 'admin') super.push(person);
    }
}
const snowbars = new Team("SnowBars", "Tom", "Sam", "Bob");

snowbars.push('admin');
console.log(snowbars);




















// Операции с массивами
// Копирование массива. slice()
const users = ['Vasya', 'Nika', 'Kirill'];
console.log(users);
const people = users.slice();

people[1] = 'Mike';
console.log(users);
console.log(people);
// Можно с помощью spread оператора
const users = ['Vasya', 'Nika', 'Kirill'];
console.log(users);
const people = [...users];
people[1] = 'Mike';
console.log(users);
console.log(people);

// Также метод slice() позволяет скопировать часть массива. Для этого он принимает два параметра:
// slice(начальный_индекс, конечный_индекс)
const users = ['Vasya', 'Nika', 'Kirill'];
console.log(users);
const people = users.slice(0, 1);
console.log(people);


// push()
// Метод push() добавляет элемент в конец массива:
people = [];
people.push('Tom');
people.push('Vasya');
people.push('Nika');
console.log('В массиве people элементов:', people.length);
console.log(people);

// pop()
// Метод pop() удаляет последний элемент из массива:
users = ['Vasya', 'Nika', 'Kirill'];

const lastPerson = users.pop();
console.log(lastPerson);//Kirill

// shift()
// Метод shift() извлекает и удаляет первый элемент из массива:
users = ['Vasya', 'Nika', 'Kirill'];
const firstPerson = users.shift();
console.log(users);//[ 'Nika', 'Kirill' ]


// unshift()
// Метод unshift() добавляет новый элемент в начало массива:
users = ['Vasya', 'Nika', 'Kirill'];
const addNew = users.unshift('Loghkin');
console.log(users);//[ 'Loghkin', 'Vasya', 'Nika', 'Kirill' ]

// Удаление элемента по индексу. splice()
// Метод splice() удаляет элементы с определенного индекса. Например, удаление элементов с третьего индекса:
const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const deleted = people.splice(2);
console.log(people);//[ 'Tom', 'Sam' ]
console.log(deleted);//[ 'Bill', 'Alice', 'Kate' ]


// concat()
// Метод concat() служит для объединения массивов. В качестве результата он возвращает объединенный массив:
const men = ['Vasya'];
const women = ['Nika'];
 people = men.concat(women);
console.log(people);//[ 'Vasya', 'Nika' ]

// join()
// Метод join() объединяет все элементы массива в одну строку, используя определенный разделитель, который передается через параметр:
const people = ["Tom", "Sam", "Bob"];
const peopleToString = people.join(';');
console.log(peopleToString);//Tom;Sam;Bob

// sort()
// Метод sort() сортирует массив по возрастанию:
const people = ["Tom", "Sam", "Bob"];
people.sort();
console.log(people);//[ 'Bob', 'Sam', 'Tom' ]


const numbers = [200, 15, 5, 35];
numbers.sort( (a,b) => a - b );
console.log(numbers);//[ 5, 15, 35, 200 ]
// Функция сортировки получает два рядом расположенных элемента массива. Она возвращает положительное число, если первый элемент должен находится перед вторым элементом. Если первый элемент должен располагаться после второго, то возвращается отрицательное число. Если элементы равны, возвращается 0.
// reverse()

// Метод reverse() переворачивает массив задом наперед:
const people = ["Tom", "Sam", "Bob"];
people.reverse();
console.log(people);


// Поиск индекса элемента
// Методы indexOf() и lastIndexOf() возвращают индекс первого и последнего включения элемента в массиве. Например:
const people = ["Tom", "Sam", "Bob"];

// every()
// Метод every() проверяет, все ли элементы соответствуют определенному условию:
const numbers = [ 1, -12, 8, -4, 25, 42 ];
const passed = numbers.every(n => n > 0);
console.log(passed);//false

// some()
// Метод some() похож на метод every(), только он проверяет, соответствует ли хотя бы один элемент условию. И в этом случае метод some() возвращает true. Если элементов, соответствующих условию, в массиве нет, то возвращается значение false:
const numbers = [ 1, -12, 8, -4, 25, 42 ];
const passed = numbers.some(n => n > 0);
console.log(passed);//true
// filter()
// Метод filter(), как some() и every(), принимает функцию условия. Но при этом возвращает массив тех элементов, которые соответствуют этому условию:
const numbers = [ 1, -12, 8, -4, 25, 42 ];
const passed = numbers.filter(n => n > 0);
console.log(passed);//[ 1, 8, 25, 42 ]


// forEach() и map()
// Методы forEach() и map() осуществляют перебор элементов и выполняют с ними определенный операции. Например, используем метод метода forEach() для вычисления квадратов чисел в массиве:
const numbers = [ 1, 2, 3, 4, 5, 6];
numbers.forEach(n=>
    console.log(`Квадрат числа ${n} равен: ${n*n}`));
//     Квадрат числа 1 равен: 1
// Квадрат числа 2 равен: 4
// Квадрат числа 3 равен: 9
// Квадрат числа 4 равен: 16
// Квадрат числа 5 равен: 25
// Квадрат числа 6 равен: 36


// map как и forEach, но возвращает массив в результатом высилений
const numbers = [ 1, 2, 3, 4, 5, 6];
const squares = numbers.map(n => n * n );
console.log(`Квадарат числа равен ${squares}`);//[ 1, 4, 9, 16, 25, 36 ]
// Поиск в массиве
// Метод find() возвращает первый элемент массива, который соответствует некоторому условию. В качестве параметр метод find принимает функцию условия:
const numbers = [1, 2, 3, 5, 8, 13, 21, 34];
let found = numbers.find(n=> n>10);
console.log(found);//13
// Метод findIndex также принимает функцию условия, только возвращает индекс первого элемента массива, который соответствует этому условию:
numbers = [1, 2, 3, 5, 8, 13, 21, 34];
let found = numbers.findIndex(n=> n>10);
console.log(found);//5


// Метод flat и преобразование массива
// Метод flat() упрощает массив с учетом указанной вложенности элементов:
const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
const flattenPeople = people.flat(2);
console.log(flattenPeople);//[ 'Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann' ]
// если мы не знаем сколько вложенных массивов то Infinity
const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
const flattenPeople = people.flat(Infinity);
console.log(flattenPeople);//[ 'Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann' ]



// Строки, объект String и его методы
// Длина строки
// Свойство length указывает на длину строки:
const hello = 'Hello';
console.log(`В строке ${hello} ${hello.length} символов`);//В строке Hello 5 символов


// Повторение строки
// Метод repeat() позволяет создать строку путем многократного повторения другой строки. Количество повторов передается в качестве аргумента:
const hello = 'Hello';
console.log(hello.repeat(3));//HelloHelloHello

// Выбор подстроки
// Для того, чтобы вырезать из строки подстроку, применяются методы substring() и slice().

// Substring
// Метод substring() принимает два параметра:

// индекс символа в строке, начиная с которого надо проводить обрезку строки. Обязательный параметр

// индекс, до которого надо обрезать строку. Необязательный параметра - если он не указан, то обрезается вся остальная часть строки
const hello = "привет мир. пока мир";
const world = hello.substring(1,5);
console.log(world);//риве

// slice
// Еще один метод slice также позволяет получить из строки какую-то ее часть. Она принимает два параметра:

// индекс символа в строке, начиная с которого надо проводить обрезку строки. Обязательный параметр

// индекс, до которого надо обрезать строку. Необязательный параметра - если он не указан, то обрезается вся остальная часть строки
const hello = "привет мир. пока мир";
const world = hello.slice(1,5);
console.log(world);


// Управление регистром
// Для изменения регистра имеются методы toLowerCase() (для перевода в нижний регистр) и toUpperCase() (для перевода в верхний регистр).
const hello = "ПРИВЕТ мир. пока мир";
const world = hello.toLowerCase();
console.log(world);//привет мир. пока мир

const hello = "Привет мир. пока мир";
const world = hello.toUpperCase();
console.log(world);//ПРИВЕТ МИР. ПОКА МИР


// Получение символа по индексу
// Чтобы получить определенный символ в строке по индексу, можно применять методы charAt() и charCodeAt(). Оба этих метода в качестве параметра принимают индекс символа:
const hello = "Привет Том";
console.log(hello.charAt(2));//и
console.log(hello.charCodeAt(2));//1080 - это код буквы 'и'

// Удаление пробелов
// Для удаления начальных и концевых пробелов в стоке используется метод trim():
let hello = "   Привет Том  ";
const beforeLength = hello.length;
hello = hello.trim();
const afterLength = hello.length
console.log(`Длина строки до:${beforeLength}`);//Длина строки до:15
console.log(`Длина строки после:${afterLength}`);//Длина строки после:10
// trimStart(): удаляет пробел с начала строки

// trimEnd(): удаляет пробел с конца строки

// trimLeft(): удаляет пробел с левой части строки

// trimRight(): удаляет пробел с правой части строки
let hello = 'Hello ';
let goodbye = 'goodbye';
hello = hello.concat(goodbye);
console.log(hello);//Hello goodbye


// Замена подстроки
// Метод replace() заменяет первое вхождение одной подстроки на другую:
let hello = 'Добрый день';
hello = hello.replace('день', 'вечер');
console.log(hello);//Добрый вечер

let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
menu = menu.replace('чай', 'кофе');
console.log(menu);//Завтрак: каша, кофе. Обед: суп, чай. Ужин: салат, чай.

// Однако еще один метод - replaceAll() позволяет заменить все вхождения подстроки:
let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
menu = menu.replaceAll('чай', 'кофе');//
console.log(menu);//Завтрак: каша, кофе. Обед: суп, кофе. Ужин: салат, кофе.


// Разделение строки
// Метод split() разбивает строку на массив подстрок по определенному разделителю. В качестве разделителя используется строка, которая передается в метод:
const message = "Сегодня была прекрасная погода";
messageParts = message.split(' ');
console.log(messageParts);


// Проверка начала и окончания строки
// Метод startsWith() возвращает true, если строка начинается с определенной подстроки. А метод endsWith() возвращает true, если строка оканчивается на определенную подстроку.
const hello = "let me speak from my heart";
console.log(hello.startsWith('let'));//true
console.log(hello.endsWith('let'));//false


// Зполнение строки
// Методы padStart() и padEnd() растянуть строку на определенное количество символов и заполнить строку слева и справа соответственно.
let hello = 'hello'.padStart(17, 'JavaScript, ');
console.log(hello);//JavaScript, hello

let hello = 'hi'.padEnd(9, ', Vasya');
console.log(hello);//hi, Vasya


// Объект RegExp. Регулярные выражения
// Методы RegExp
// Чтобы определить, соответствует ли регулярное выражение строке, в объекте RegExp определен метод test(). Этот метод возвращает true, если строка соответствует регулярному выражению, и false, если не соответствует.
const initialText = 'hello Vasya';
const exp = /hello/;
const result = exp.test(initialText);
console.log(result);

// Аналогично работает метод exec - он также проверяет, соответствует ли строка регулярному выражению, только теперь данный метод возвращает ту часть строки, которая соответствует выражению. Если соответствий нет, то возвращается значение null.
const initialText = 'hello Vasya';
const exp = /hellos/;
const result = exp.exec(initialText);
console.log(result);//null

// Группы символов
// Регулярное выражение не обязательно состоит из обычных строк, но также может включать специальные элементы синтаксиса регулярных выражений. Один из таких элементов представляют группы символов, заключенные в квадратные скобки. Например:
const initialText = 'Васизм';
const exp = /[абв]/;//[а-я], [^а-я]
const result = exp.test(initialText);
console.log(result);//true


// При необходимости мы можем собирать комбинации выражений:
const initialText = 'Ведьмак 3: Дикая охота';
const exp = /[дт]о[нм]/
const result = exp.test(initialText);
console.log(result);//false


// Флаг i. Регистр символов
// Рассмотрим следующий пример:
const initialText = 'Привет, Василий';
const exp = /василий/i
const result = exp.test(initialText);
console.log(result);//true

const initialText = 'Привет\,Василий';
const exp = /привет,василий/is;
const result = exp.test(initialText);
console.log(result);//true


// Регулярные выражения в методах String

// Разделение строки. Метод split
// Метод split может использовать регулярные выражения для разделения строк. Например, разделим приложение по словам:
const initialText = 'Сегодня была прекрасная погода';
const exp = /\s/;
const result = initialText.split(exp);
result.forEach(value=>console.log(value));
//Сегодня
// была
// прекрасная
// погода
const initialText = 'Вася пришел в Жк Исетский вчера';
const exp = /при[а-я]*/ig;
const result = initialText.match(exp);
result.forEach(value=>console.log(value));//пришел

// Поиск в строке. Метод search
// Метод search находит индекс первого включения соответствия в строке:
const initialText = 'Привет, Василий';
const exp = /вас/i;
const result = initialText.search(exp);
console.log(result);//8

// Замена. Методы replace
// Метод replace позволяет заменить все соответствия регулярному выражению определенной строкой:
let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
const exp = /суп/gi;
let result = menu.replace(exp, 'супчик');
console.log(result);//Завтрак: каша, чай. Обед: супчик, чай. Ужин: салат, чай.


// Синтаксис регулярных выражений
// Рассмотрим базовые моменты синтаксиса регулярных выражений.

// Метасимволы
let phoneNumber = "+1-234-567-8901";
let myExp = /\d -\d{3}-\d{3}-\d{4}/;
phoneNumber = phoneNumber.replace(myExp, '80000000000');
console.log(phoneNumber);

// Отдельно рассмотрим применение комбинации '\b', которая указывает на соответствие в пределах слова. Например, у нас есть следующая строка: "Языки обучения: Java, JavaScript, C++". Со временем мы решили, что Java надо заменить на C#. Но простая замена приведет также к замене строки "JavaScript" на "C#Script", что недопустимо. И в этом случае мы можем проводить замену, если регулярное выражение соответствует всему слову:
let initialText = "Языки обучения: Java, JavaScript, C++, Django";
let exp = /\bdjango\b/gi;
let result = initialText.replace(exp, 'Python');
console.log(result);//Языки обучения: Java, JavaScript, C++, Django



// Группы в регулярных выражениях

let initialText = '<img src= "picture.png" />'; 
let exp = /[a-z]+\.(png|jpg)/i//пробелы не ставить если не надо NB!
let result = initialText.match(exp);
result.forEach(function(value){
    console.log(value);
})
//picture.png
// png

// Получение значений групп
// Преимуществом использованием групп в регулярных выражениях является то, что мы можем получить значения каждой отдельной группы. Например, как известно, в разных странах используются разные форматы дат. Что, если мы хотим получаем дату в формате "год-месяц-день" и хотим преобразовать ее в какой-то другой формат? В этом случае для каждого отдельного компонента мы можем определить свою группу:
const exp = /(\d{4})-(\d{2})-(\d{2})/;
const result = exp.exec("2021-09-06");

console.log(result[0]);//2021-09-06
console.log(result[1]);//2021
console.log(result[2]);//09
console.log(result[3]);//06


// Именнованные группы
// JavaScript позволяет назначить каждой группе в регулярных выражениях определенное имя. С помощью этого имени потом можно получить значение, которое соответствует этой группе. Для установки имени групы внутри скобок, которые определяют группу, ставится знак вопроса, после которого в угловых скобках идет название группы:

// (?<название_группы> ... )
const exp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result = exp.exec("2021-09-06");
console.log(result.groups);
console.log(result.groups.year);
console.log(result.groups.month);
console.log(result.groups.day);


// Утверждения
// Утверждения или assertiobs позвляют получить подстроку, которая соответствует регулярному выражению и которая предваряется или, наоборо, не предваряется определенным выражением.

// Положительное утверждение (когда подстрока должна предваряться другой подстрокой) определяется с помощью выражения:
// (?<=...)
	
// (?<!...) - не должна предваряться

const text1 = "All costs: $10.53";
const text2 = "All costs: €10.53";

const exp = /\d+(\.\d*)?/;
const result1 = exp.exec(text1);
console.log(result1[0]);
const result2 = exp.exec(text2);
console.log(result2[0]);


const text1 = "All costs: $10.53";
const text2 = "All costs: €10.53";

const exp = /(?<=\$)\d+(\.\d*)?/;
const result1 = exp.exec(text1);
console.log(result1);
result1.forEach(function(value){
    console.log(value);
})
const result2 = exp.exec(text2);
console.log(result2);











