const inputArray = [1, 2, 1, 3, 8, 2, 1, 8, 5, 3];

function removeDuplicates(arr) {
    let set = new Set(arr);
    return set;    
}

const uniqueItems = removeDuplicates(inputArray);
console.log(uniqueItems);