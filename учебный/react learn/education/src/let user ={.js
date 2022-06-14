let user ={
    name: 'Ника',
    dialog(say){
        console.log(`${say}, ${this.name}`)
    }
};
let say = user.dialog.bind(user);
say('Здарова')



const um =(a, b)=>{
    return a*b
}
let io = um.bind(null, 3)
console.log(io(3)); 
console.log(io(4));

const numbers = [2, 4, 10, 50];
const doubleKil = numbers.map(i => i **10);
console.log(doubleKil)

new Promise ((resolve, reject)=>{
   setTimeout(()=>{
    resolve('Вася!!')
   }, 1500)
})
.then(i=>console.log(i))
.catch(eror=>console.log(eror))