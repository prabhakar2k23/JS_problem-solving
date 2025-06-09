// Returns the middle character of a string

// create a function that takes a string and returns, the middle character(s). 
// if the word's length is odd return the midlle character. 
// if the word's length is even, return the middle two characters.

function getMiddle(str) {
  let len = str.length;
  let mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    // even length → return middle two characters
    return str[mid - 1] + str[mid];
  } else {
    // odd length → return the middle character
    return str[mid];
  }
}

let input = prompt("Enter a word:");
alert("Middle character(s): " + getMiddle(input));