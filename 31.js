// Program to count number of special characters and white spaces in a given string.

let str = prompt("Enter a string:");

let whiteSpaceCount = 0;
let specialCharCount = 0;

for(let i=0; i<str.length; i++){
    let ch= str[i];
    
    if(ch === ' '){
        whiteSpaceCount++;
    }
    else if(!ch.match(/[a-zA-Z0-9]/)){
        specialCharCount++;
    }
}
console.log("White spaces:",whiteSpaceCount);
console.log("Special characters:",specialCharCount);