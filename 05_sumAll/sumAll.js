const sumAll = function(start, end) {
  let sum = 0;

  if (start > end)  {
    for(current = end; current <= start; current++) {
      sum = sum + current;
    };
  } else if (start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number') return "ERROR";

  for(current = start; current <= end; current++) {
    sum = sum + current;
  };

  return sum; 
};

// Do not edit below this line
module.exports = sumAll;
