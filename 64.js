// get unique words from given sentence

function getUniqueWords(sentence) {
  let words = sentence.toLowerCase().match(/\b\w+\b/g);
  let unique = [];

  for (let word of words) {
    if (!unique.includes(word)) {
      unique.push(word);
    }
  }

  return unique;
}


let result = getUniqueWords("Hello hello world, this is the world of JS");
console.log(result);
// Output: ["hello", "world", "this", "is", "the", "of", "js"]
