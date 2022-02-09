const leapYears = function(year) {
    
    // if divisible by 100 && divisible by 400 return true 
    if((year % 100 == 0) && (year % 400 == 0)) return true;
    // if divisible by 4 && NOT divisible by 100 return true 
    if ((year % 100 != 0) && (year % 4) == 0) return true;
    // not divisable by 4 && divisible by 100; 
    else return false;
};



// Do not edit below this line
module.exports = leapYears;
