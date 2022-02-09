const palindromes = function (str) {
    let punctuation = [',','.','!','?',' '];

    // Array from string with punctuation and breaks removed
    let strArr = str.toLowerCase().split('').filter((e) => !punctuation.includes(e));

    let cleanStr = strArr.join('');
    let reversedStr = strArr.reverse().join('');
    let isPalindrome;

    (cleanStr === reversedStr) ? isPalindrome = true : isPalindrome = false;

    console.log(cleanStr, reversedStr);

    return isPalindrome;
};


// Do not edit below this line
module.exports = palindromes;
