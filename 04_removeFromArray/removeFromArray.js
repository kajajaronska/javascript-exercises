const removeFromArray = function(arr, ...removed) {
    let removedArr = removed;

    for (let i=0; i <= removedArr.length-1; i++) {
        let index = arr.indexOf(removedArr[i])
        if (index > -1) arr.splice(index, 1);
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
