const removeFromArray = function(arr, ...lookup) {
    return arr.filter(item => !lookup.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
