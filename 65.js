// check palindrome

function findPalindromes(sentence) {
  let words = sentence.toLowerCase().match(/\b\w+\b/g); // extract words
  let palindromes = [];

  for (let word of words) {
    if (word === word.split('').reverse().join('')) {
      palindromes.push(word);
    }
  }

  return palindromes;
}

let result = findPalindromes("Madam went to the level noon party");
console.log(result);  // Output: ["madam", "level", "noon"]
