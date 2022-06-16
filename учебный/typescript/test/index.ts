// let company = {}

// company = 1

// Базовые типы
// const lastName:string = 'Dev'

// let age:number  = 20

// let ages:number |null = 20

// let agess:number |undefined = 20
// //лучше не использовать
// let agep:any = 20


// enum users {
//     Vanya = 20,
//     Maks = 23,
//     Vasya = 23,
// }

// users.Maks


// Объекты
const person:{
    name: string
    age: number
    country: 'Russia' | 'USA' | 'UK'
    liked: string
    //from нету но мы говорим ts чувак забей ты на from и поставлю ?
    from?: string
} = {
    name: 'Vasya',
    age: 25,
    country: 'Russia',
    liked: 'Watch serials',
}


// Массивы
const names:(number | string)[] = ['Elena', 'Vasya', 'Ivan', 1]
names.push(1)

// функции
// const getRandomInt = (min:number, max:number):null=>null
// const number = getRandomInt(1, 1)

// const getRandomInts = (min:number, max:number):number=>{
//     return min + max 
// }
// const numbers = getRandomInts(1, 1)

// const getRandomIntss = (min:number, max:number):string=>{
//     return min + max + ''
// }
// const numberss = getRandomInts(1, 1)
// console.log(numberss)

//Типы для каких то маленьких историй, а вот интерфейсы для более глобальных
type TypeCity = {
    bornYear: number
    population: number
    title: string 
}

const newYork:TypeCity = {
    bornYear: 1400,
    population: 290050000,
    title: 'NewYork'
}

const cities:TypeCity[] = [newYork, {
    bornYear: 1212121,
    population: 1521415,
    title: 'Ekaterinburg',

}]



// Интерфейсы т
type TypeImage = {
    path: string,
    size: string,
    name: string,
    id: string
}

interface IproductReviews {
    reviews?: string[]
}


interface Iproduct extends IproductReviews {
    name: string,
    created_at?: string,
    price: number,
    slug: string,
    image?: TypeImage,
}
// переназначение
 let product: Iproduct = {} as Iproduct

// Утверждения
product = {
    name: 'Pen',
    price: 540,
    slug: 'pen',
    reviews: ['wef', 'wew', ] 
}


// Generic это теже самы argumets у функции 

const getArray= <T>(items:T[]):T[]=> [...items]

const numberArray = getArray<number>([1, 2 , 3])
const namesV = getArray<string>(['Vasya', 'Elena'])







