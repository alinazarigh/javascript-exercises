function f(x) {
  return Math.round(x * 10) / 10;
}

const convertToCelsius = function (x) {
  return f((x - 32) * (5 / 9));
};

const convertToFahrenheit = function (x) {
  return f(x * (9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
