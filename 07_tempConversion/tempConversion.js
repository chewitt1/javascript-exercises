const convertToCelsius = function(f) {
  let c = ((f-32)*(5/9)).toFixed(1);
  if(c % 1 == 0){
    return Math.floor(c);
  }
  return parseFloat(c);
};

const convertToFahrenheit = function(c) {
  let f = ((c*(9/5))+32).toFixed(1);
  if(f % 1 == 0){
    return Math.floor(f);
  }
  return parseFloat(f);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
