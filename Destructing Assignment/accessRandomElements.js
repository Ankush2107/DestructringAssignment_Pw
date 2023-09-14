const inputArray = [1, 2, 3, 4, 5];

function RandomElementAccess(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last]
}

console.log(RandomElementAccess(inputArray));