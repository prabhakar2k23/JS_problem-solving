// Space between each character

// Create a function that takes a string and returns a string with spaces in between all of the characters.

let str = prompt("Enter a string: ");

function spaceChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (i !== str.length - 1) {
            result += " ";  
        }
    }
    return result;
}

console.log(spaceChar(str));