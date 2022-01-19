const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

const findTheOldest = function(arr) {
    arr.map(person => {
        if(!("yearOfDeath" in person))person.age = new Date().getFullYear() - person.yearOfBirth;
        else person.age = person.yearOfDeath - person.yearOfBirth;
    });

    return arr.reduce((oldest,currentPerson) => {return oldest.age < currentPerson.age ? currentPerson : oldest});
};

// console.log(findTheOldest(people));


let arr = [5, 6, "hello", "you", 5, true];

// let newArr = arr.slice(2,4);

let newArr = arr.splice(1,3)

console.log(newArr, arr);



// Do not edit below this line
// module.exports = findTheOldest; 