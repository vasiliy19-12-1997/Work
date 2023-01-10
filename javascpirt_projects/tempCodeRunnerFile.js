let hotpo = function (n) {
  if (n == 0) return 0;
  let j = 0; //Optional Handler to n = 0
  while (n >= 1) {
    n % 2 ? 3n + 1 : n / 2;
    j++;
  }
  return j;
};
console.log(hotpo(10));