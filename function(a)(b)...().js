const sum = a => (b) => b ? sum(a+b) : a;
const res = sum(1)(2)(3)();

console.log(res);

// or 

// const sum = function(a) {
//   return function(b) {
//     if (b) {
//       return sum(a+b);
//     }
//     return a;
//   }
// }