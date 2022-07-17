let obj = {
    number: 5,
    sayNumber: function(){
        say=()=>{
            console.log(this)
        }
    }
}
obj.sayNumber();


let names = ['Vasya', 'Nika', 'Kirill', 'Anatoly'];
let newNames = names.filter(name=>name.length>5);
console.log(newNames);

let footbalists = ['Messi', 'Ronaldo', 'Tiere Anri', 'Markus'];
let newFootbolists = footbalists.map((item)=>item.toLocaleLowerCase());
console.log(newFootbolists);

max=(...numbers)=>{
    console.log(numbers);
}
max(3, 4, 67, 97);


max=(a, b,...numbers)=>{
    console.log(numbers);
}
max(3, 4, 67, 97);

const   obj1 = [1, 2, 3],
        obj2 = [5, 65, 67];
const  result =Math.max(...obj1,...obj2);
console.log(result); 

const user = {
    name: 'Vasya',
    age: 50,
};
const admin = {
    name: 'Nika',
    age: 25,
};



const res = {...{},...admin...,user}
console.log(res);

const x = 10, y = 100;
const coords = {x, y};
console.log(coords);


const avatar = 'Photo';
const user = {
    name: 'Vasya',
    age: 50,
};
const admin = {
    name: 'Nika',
    age: 25,
};
const res = {...admin,...user, avatar};
console.log(res);

const user = {
    name: {
       first: 'Vasya',
       second: 'Nika',
    },
    age: 50,
};
// const userName = user.name;

const {name:{first, second}, age} = user;
console.log(first, second, age);

function connect({
    host = 'localhost',
     port=  3000,
     user= 'default'}={}){
         console.log(`host: ${host}, port: ${port}, user: ${user}`)
     }
connect({
     port: 1000,
     host: 'vasyahost'     
})

const numbers = [1, 2, 5, 7];

const [, , ,c ] = numbers;
console.log(c);


const numbers = [[1, 2], [5, 7]];

const [[a,b], [c, d]] = numbers;
console.log(a, b ,c, d);



const country = {
    name: 'England',
    population: 20000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '50%'],
    },
};
const {gender:{male:[maleUnder18, maleAdult], female:[femaleUnder18, femaleAdult]}} = country;
console.log(maleAdult, femaleAdult);