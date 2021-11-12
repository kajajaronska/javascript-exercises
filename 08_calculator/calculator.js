const add = function(a, b) {
  if(a == 0 && b == 0) return 0;

	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, curr) => {
    return acc += curr},0);
};

const multiply = function(arr) {
  return arr.reduce((acc,curr) => {return acc *= curr},
  )};

const power = function(a,b) {
	return parseInt(a) ** parseInt(b);
};



const factorial = function(num) {
  let arr = [];
  for(let i = num; i >= 1; i--) {
    arr.unshift(i);
  };

  if(num === 0 || num === 1) return 1;

  return arr.reduce((acc,curr)=>{ return acc *= curr},1);
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
