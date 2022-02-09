const fibonacci = function(num) {
    // Fibonacci rule: x[n] = x[n-1] + x[n-2]

    if(num <= 0) return "OOPS";

    let arr = [0,1];
    let y = +num;

    for(let i = 2; i < 10000000; i++) {
        arr[i] = arr[i-1] + arr[i-2];
        arr.push[arr[i]];
    };

    return arr[y];

};

// Do not edit below this line
module.exports = fibonacci;
