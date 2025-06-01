// Check if String ending matches second String

// Create a function/method that takes two Strings and 
// returns true of the first string ends with second string, otherwise return false.

let mainStr = prompt("Enter a string: ");
let endingStr = prompt("Enter a string: ");

function endsWith(mainStr, endingStr) {
  if (endingStr.length > mainStr.length) return false;

  let startIndex = mainStr.length - endingStr.length;

  for (let i = 0; i < endingStr.length; i++) {
    if (mainStr[startIndex + i] !== endingStr[i]) {
      return false;
    }
  }

  return true;
}
console.log(endsWith(mainStr, endingStr));