// Stuttering Function

// write a function that shutters a word as if someone is struggling to read it. 
// The first two letters are repeated twice with an ellipsis ... and 
// then the word is pronounced with a question mark?

let input = prompt("Enter a word: ");

function stutter(word) {
  let firstTwo = word.slice(0, 2);    
  return `${firstTwo}... ${firstTwo}... ${word}?`;
}

console.log(stutter(input));