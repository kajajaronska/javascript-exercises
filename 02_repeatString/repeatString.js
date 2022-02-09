const repeatString = function(string, num) {
    let finalString = '';
    let i = 1;

    while(i <= num) {
        i++;
        finalString = finalString + string;
    };

    if(num < 0) return "ERROR";
    else return finalString;
};

// Do not edit below this line
module.exports = repeatString;
