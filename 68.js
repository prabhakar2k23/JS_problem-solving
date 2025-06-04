//  Reverse Each Word in a Sentence

function reverseEachWord(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

// Example usage:
console.log(reverseEachWord("JavaScript is fun"));  // Output: "tpircSavaJ si nuf"
