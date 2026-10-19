const fibonacci = function(num) {
    if (typeof num !== "number" || num <= 0 || Number.isNaN(num))
        return "OOPS"

    let a = 1 , b = 1;

    for (let i = 2 ; i < num - 1 ; i++) {
        let temp = a + b;
        a = b; b = temp;
    }

    return a + b;
};

console.log(fibonacci(NaN));

// Do not edit below this line
module.exports = fibonacci;
