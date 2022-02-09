const reverseString = function(str){
    let newArr = [];
    let i = 0;

    while(i <= str.length - 1) {
        newArr.unshift(str[i]);
        i++;
    }

    return newArr.join('');
};


// Alternative solution 1:

// const reverseString = function(str) {
//     let letters = [];

//     for (let i = str.length-1; i >= 0; i--) {
//         letters.push(str[i]);
//     }

//     return letters.join('');

// };



// Do not edit below this line
module.exports = reverseString;
