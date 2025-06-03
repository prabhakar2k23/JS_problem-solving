// Add function to count word occurrences in a sentence.

function countWord(sentence, word) {
  let arr = sentence.toLowerCase().split(" ");
  let target = word.toLowerCase();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

let result = countWord("Hello world, hello user", "hello");
console.log(result);
