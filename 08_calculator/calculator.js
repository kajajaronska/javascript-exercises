const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let total = 0;
  for(let i=0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(let i=0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
  };

const power = function(a,b) {
  return a ** b;
};



const factorial = function(num) {

    if (num === 0) return 1;
    
    let current = num;
    let total = 1;

    do {
      total *= current;
      current--;

    } while (current >= 1)

    return total;
  
  };

  



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
