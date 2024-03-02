//#5

const intUser = (x, n) =>{
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
  
}

console. log(intUser(5, 3));