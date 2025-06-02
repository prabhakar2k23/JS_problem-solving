// Max Occurring Character
// Given a string, implement a program to find max occurring character in the given string.

let str = prompt("Enter a string: ");

function maxOccurringChar(str) {
    str = str.toLowerCase();
    let maxChar = '';
    let maxCount = 0;
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        let currentChar = str[i];
        for (let j = 0; j < str.length; j++) {
            if (str[j] === currentChar) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxChar = currentChar;
        }
    }
    return maxChar;
}
console.log(maxOccurringChar(str));