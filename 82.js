// VOWEL REPLACER
// Create a function that replaces all the vowels in a string with a specified character.

let input = prompt("Enter a string: ");
let replacer = prompt("Enter a character to replace vowels: ");

function replaceVowels(str, char) {
  let vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += char; 
    } else {
      result += str[i]; 
    }
  }

  return result;
}

console.log(replaceVowels(input, replacer));