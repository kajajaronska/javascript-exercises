const palindromes = function (str) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    let arr = str
        .split('')
        .filter((letter)=> {
        return punctuation.indexOf(letter) === -1;});

    let cleanedStr = arr.join('').toLowerCase().replace(/\s/g, '');
    let reversedStr = arr.reverse().join('').toLowerCase().replace(/\s/g, '');
    let isPalindrome;

    (reversedStr === cleanedStr) ? isPalindrome = true : isPalindrome = false;

    console.log(cleanedStr, reversedStr);
    return isPalindrome;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));



// Do not edit below this line
module.exports = palindromes;
