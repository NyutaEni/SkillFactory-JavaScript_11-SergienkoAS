//#3

function sum(a) {
  return function(b) {
    return a + b;
  };
}

let c = sum(2);
console.log(c(2));
