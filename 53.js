// Given a string s, and an integer array indices of the same length. 
// The string s will be shuffled such that the character at 
// the ith position moves to indices[i] in the shuffled string, 
// return shuffled string.

let s = prompt("Enter the string:");
let indicesStr = prompt("Enter the indices (comma-separated):");

// Convert string to number array
let indices = indicesStr.split(",").map(Number);

function restoreString(s, indices){
    let result = Array(s.length);
    for(let i=0; i<s.length; i++){
        result[indices[i]] = s[i];
    }
    return result.join('');
}

console.log("Shuffled string is: " + restoreString(s, indices));