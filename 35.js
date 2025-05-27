// Implement a program to calculate toggle case of each characters of a string.

let string = prompt("Enter bill amount: ");
let toggle = "";

for(let i=0; i<string.length; i++){
    let ch = string[i];
    if(ch >='A' && ch<='Z'){
        toggle += ch.toLowerCase();
    }else if(ch>='a' && ch<='z'){
        toggle += ch.toUpperCase();
    }else{
        toggle += ch;
    }
}
console.log("Toggle: ",toggle);