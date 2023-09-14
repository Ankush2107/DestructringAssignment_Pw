let x = 15;
let y = 7;

function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

const answer = swapValues(x, y);
console.log(answer);
console.log(x);
console.log(y);
