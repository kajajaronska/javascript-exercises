const removeFromArray = function(arr, ...removed) {

    for(let i = 0; i < removed.length; i++) {
        let index = arr.indexOf(removed[i]);
        if (index === -1) continue;
        arr.splice(index,1);
    };

    // let indexOfRemoved = arr.indexOf(removed);
    // arr.splice(indexOfRemoved,1);

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
