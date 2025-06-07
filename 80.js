// Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.
// aabc ----> true
// baba ----> false
// abba ----> true

let input = prompt("Enter a word: ");

function doubleLetters(word) {
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(doubleLetters(input));