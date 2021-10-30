const repeatString = function(string, num) {
    // if (num > 0) {
    // return string.repeat(num)
    // } else {return "ERROR"};

    let newString = '';

    if(num > 0) {
        for(let i=1; i < num + 1; i++) {
            newString = newString + string;
        }
    } else if(num === 0) {
        return newString;
    } else {
        return "ERROR"
    }
        return newString;
};

// Do not edit below this line
module.exports = repeatString;
