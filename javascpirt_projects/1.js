// // гипотеза Колатца если четное то /2 если нечетное *3 + 1
// let hotpo = function (n) {
//   if (n == 0) return 0; //Optional Handler to n = 0
//   function x() {
//     if (n % 2 === 0) {
//       return n / 2;
//     } else {
//       return 3n + 1;
//     }
//   }
//   return console.log(x + 1);
// };
// console.log(hotpo(10));

let hotpo = function (n) {
  if (n == 0) return 0;
  let j = 0; //Optional Handler to n = 0
  while (n > 1) {
    n % 2 ? 3n + 1 : n / 2;
    j++;
  }
  return j;
};
// hotpo(10);
console.log(hotpo(10));
