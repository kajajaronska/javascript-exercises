const ftoc = function(num) {
  let cTemp = (num - 32) * (5/9);

  if (cTemp % 1 != 0) {
    return Number(cTemp.toFixed(1));
  } else {
    return Number(cTemp.toFixed(0));
  }

};

const ctof = function(num) {
  let fTemp = num * (9/5) + 32;

  if (fTemp % 1 != 0) {
    return Number(fTemp.toFixed(1));
   } else {
     return Number(fTemp.toFixed(0));
   }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
