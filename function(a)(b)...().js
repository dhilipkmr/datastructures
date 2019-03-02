const sum = a => (b) => b ? sum(a+b) : a;
sum(1)(2)(3)();


// or 

const sum = function(a) {
  return function(b) {
    if (b) {
      return sum(a+b);
    }
    return a;
  }
}