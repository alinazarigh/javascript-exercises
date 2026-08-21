const fibonacci = function(number) {
    number = parseInt(number);
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    let current = 1;
    let prev = 1;
    for (let i = 0; i < number - 1; ++i) {
        const temp = current;
        current += prev;
        prev = temp;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
