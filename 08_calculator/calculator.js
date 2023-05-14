const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	if(arr.length > 0){
    return arr.reduce((total, val) => {return total + val;}, 0);
  }
  return 0;
};

const multiply = function(arr) {
  if(arr.length > 0){
    let val = 1;
    for(let i = 0; i < arr.length; i++){
      val *= arr[i];
    }
    return val;
  }
  return 0;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num == 0 || num == 1){
    return 1;
  }
  return (num * factorial(num -1));
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
