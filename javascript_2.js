//#2

let  num = Number(prompt('Введите любое число (но не больше 1 000)'));


function operatNum() {
  let flag = 'Число простое';
    if (num <= 1000 && num >= 1) {       
        for (let i = 2; i < num; i++) {
          if (num % i == 0) {
            flag = 'Число составное';
            break; 
            }
       } console.log(flag);
    } else {
        console.log(`Данные неверны`);
        }
  
}

  operatNum();