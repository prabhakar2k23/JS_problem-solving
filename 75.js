// Repeating Letters

// Create a method that takes a string and returns a string in which each character is repeated once.

let input = prompt("Enter a string: ");

function repeatString(str) {
    let result = "";
  for (let char of str.toLowerCase()) {
    result += char + char;
  }

  return result;
}

console.log(repeatString(input));