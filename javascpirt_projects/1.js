// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 1000);
// });
// promise.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );

// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(console.log);

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => console.log("выполнилось через 3 секунды"));

// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });

// function showCircles(){
//   return new Promise((resolve, reject) => {

//   })
// }

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    alert(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    alert(result); // 2
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 4
    return result * 2;
  });

loadScript("/article/promise-chaining/one.js")
  .then((script) => loadScript("/article/promise-chaining/two.js"))
  .then((script) => loadScript("/article/promise-chaining/three.js"))
  .then((script) => {
    // скрипты загружены, мы можем использовать объявленные в них функции
    1();
    2();
    3();
  });
