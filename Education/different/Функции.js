// let count = 5;


// function humanSayHello(user) {
//     console.log(count);
//     console.log('Hello ' + user + '!');
// }
// humanSayHello();
// console.log(count);
// //запускаем функцию, выхываем ее

// //function Decloration



// // чтобы не записывать код можно создать функцию и просто
// // function expression
// let calc =  function (a, b) {
//     return a + b;
// };

// console.log( calc(4, 5));
// calc(4, 8);
// calc(14, 5);


function myFirstApp(name, age){
    // из es6 пришло можно писать ` ${переменная}` 
alert(`Привет, меня зовут ${name} и это моя первая программа!` );
let skills = ['html', 'css', 'js'];
for( let i=0; i < skills.length; i++){
        document.write(`Я владею ${skills[i]}`);
     
    }
    age = prompt('Сколько вам лет', " ");
    if (age > 18){
        alert (" У тебя отличные шансы стать фронтенд разработчкиком");
    }else{
        alert("Значит не судьба");
    }
    console.log(Math.pow(4, 4));
} myFirstApp("Василий");





