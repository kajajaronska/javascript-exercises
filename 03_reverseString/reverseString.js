const reverseString = function(str) {
    let letters = [];

    for (let i = str.length-1; i >= 0; i--) {
        letters.push(str[i]);
    }

    return letters.join('');

};

// Do not edit below this line
module.exports = reverseString;
