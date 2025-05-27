// A company launched a new text editor that allows users to enter english letters, numbers and white spaces only.
// If a user attempts to enter any other type of characters, it is counted as miss.
// Given a String text, 
// write an algorithm to help the developer detect the number of misses by a given user in the given input.

let text = prompt("Enter bill amount: ");
let miss = 0;
for(let i=0; i<text.length; i++){
    if(!text[i].match(/[a-zA-Z0-9 ]/)){
        miss++;
    }
}
console.log("miss: ",miss);