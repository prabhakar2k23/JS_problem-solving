// Capitalize First Letter of Each Word.

function capitalizeSentence(sentence) {
  let arr = sentence.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(" ");
}

let input = prompt("Enter a sentence: ");
let result = capitalizeSentence(input);
console.log(result);