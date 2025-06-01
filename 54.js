// Get word count
// Create a function/method that takes a string and return the word count. The string will be a sentence.

let sentence = prompt("Enter a sentence: ");
const arr = sentence.split(" ");
console.log("Total word = ",arr.length);