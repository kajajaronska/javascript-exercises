const findTheOldest = function(arr) {
  currentYear = (new Date()).getFullYear();

  for(let i=0; i < arr.length; i++) {

    (!('yearOfDeath' in arr[i])) ? arr[i].age = (currentYear - arr[i].yearOfBirth) :
    arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth;

  };

  return arr.reduce((oldestPerson, currentPerson) => {
    if (currentPerson.age > oldestPerson.age) return currentPerson
    else return oldestPerson;
  });

  
};


// // Do not edit below this line
module.exports = findTheOldest; 