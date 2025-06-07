// Remove Every vowel from a String

// Create a function that takes a string and returns a new string with all vowels removed. 

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}


let input = prompt("Enter a string: ");
console.log(removeVowels(input));
