// Swap corner words and reverse middle characters

// Write a Java program to take an input string and exchange the first and last word and reverse the middle word.

function swapAndReverse(sentence) {
  // Split sentence into words
  let words = sentence.trim().split(/\s+/);

  if (words.length < 3) {
    return "Please enter at least three words.";
  }
  // Swap first and last word
  let temp = words[0];
  words[0] = words[words.length - 1];
  words[words.length - 1] = temp;

  // Reverse middle words
  for (let i = 1; i < words.length - 1; i++) {
    words[i] = words[i].split('').reverse().join('');
  }

  return words.join(' ');
}

// Example usage:
const input = "Hello amazing world today";
console.log(swapAndReverse(input));
// Output: today gnizama dlrow Hello
