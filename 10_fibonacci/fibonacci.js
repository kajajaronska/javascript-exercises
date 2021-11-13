const fibonacci = function(num) {
    // Fibonacci sequence rule
    // x[num] = x[num-1] + x[num-2];
    
    let y = +num;
    let x = [0,1];
    
    if(y > 0) {
        for(let i=2; i <= 317811; i++){
            x.push(x[i-1]+x[i-2]);
        };
        
        return x[num];
    } else {
        return z = "OOPS";
    };
};

// Do not edit below this line
module.exports = fibonacci;
