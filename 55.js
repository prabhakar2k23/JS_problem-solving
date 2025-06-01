// Check if String ending matches second String

// Create a function/method that takes two Strings and 
// returns true of the first string ends with second string, otherwise return false.

let mainStr = prompt("Enter first string: ");
let endStr = prompt("Enter second string: ");

function endsWith(mainStr, endStr){
    return mainStr.endsWith(endStr);
}
console.log(endsWith(mainStr,endStr));