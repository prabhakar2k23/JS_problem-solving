// Valid Palindrome

// Given a string, determine if it is a Palindrome string or not. 
// A String is Palindrome if it is equal to reverse of the original string.

let str =prompt("Enter a string: ").toLowerCase();
let rev = ""

for(let i=str.length-1; i>=0; i--){
    rev += str[i];
}
if(str === rev){
    console.log("Valid palindrome");
}else{
    console.log("Not valid palindrome")
}