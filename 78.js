// Remove Every vowel from a String

// Create a function that takes a string and returns a new string with all vowels removed. 
let input = prompt("Enter a string: ");

function removeVowels(str) {
  let result = "";
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (!vowels.includes(char)) {
      result += char; 
    }
  }

  return result;
}

console.log(removeVowels(input));