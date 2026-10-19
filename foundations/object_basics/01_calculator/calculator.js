const add = (a , b) => (a + b);

const subtract = (a , b) => (a - b);

const sum = function(nums) {
    let ret = 0;
    nums.forEach((x) => (ret += +x));
    return ret;
};

const multiply = function(nums) {
    let ret = 1;
    nums.forEach((x) => (ret *= +x));
    return ret;
};

const power = function(b , p) {
    let ret = 1;
    for (let i = 1 ; i <= p ; i++)
        ret *= b;
    return ret;
};

const factorial = function(num) {
    let ret = 1;
    for (let i = 2 ; i <= num ; i++)
        ret *= i;
    return ret;
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
