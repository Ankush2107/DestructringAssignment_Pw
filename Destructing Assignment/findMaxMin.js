const inputArray = [5, 2, 7, 1, 9];

function findMaxMin(arr) {
    if (arr.length === 0) { 
      return { max: undefined, min: undefined };
    }
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    return { max, min };
}
  
const result = findMaxMin(inputArray);
console.log(result); 
  
  
  
  
  