const simpleText = "I am using an examples and I like to use examples";

const  wordCountGenerator = (text) =>  {

    // It will split the text into individual words.
    const words = text.split(/\s+/);

    // Empty map which will store the count of words.
    const mapCount = new Map();

    for(let word of words) {
        const lowercaseWord = word.toLowerCase();
        mapCount.set(lowercaseWord, (mapCount.get(lowercaseWord) || 0) + 1);
    }

    return mapCount;
}
  
const wordCount = wordCountGenerator(simpleText);
console.log(wordCount);