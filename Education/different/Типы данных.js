// Типы данных
// Интерполяция
let vas = "Vasya";
console.log(`Он красава ${vas}`);
// Boolean
let isMarried = true;
// BigInt

// number
let x = 20;
let y = 20.807;
console.log(x+y);

// Строки String
let user = "Vasya1";
let User = 'Vasya2';
let Users = `Vasya3`;

 console.log(user);
 console.log(User);
 console.log(Users);

//  undefined указывает, что значение не определено или не установлено. Например, когда мы 
// только определяем переменную без присвоения ей начального значения, она представляет тип undefined:
let  isStrong;
console.log(isStrong);

// Присвоение значение null означает, что у переменной отсутствует значение:
isStrong = null;
console.log(isStrong);


// object
let people =  {
    name:"Vanya",
    age:20,


};


// JavaScript является языком со слабой типизацией. Это значит, что переменные могут динамически менять тип. Например:
 let id; //тип undefined
 console.log(id);
 id = 45;
 console.log(id);
 id = "45";
 console.log(id);

 let a = 50;
 let b = a + 10;
 console.log(b);

 a="100";
 let c = a + 5;
console.log(c);
// Оператор typeof
// С помощью оператора typeof можно получить тип переменной:
let id;
console.log(typeof id);

id = 105;
console.log(typeof id);

id = 45n;
console.log(typeof id);

id = "45";
console.log(typeof id);

//java script нужен для того чтобы создавать сайты приложения для смартфонов, 
// можно через node js сразу отправлять данные на сервер
