// Decimal to Binary

// A network protocol specifies how data is exchanged via transmission media. 
// The protocol converts each message into a stream of 1's and 0's. 
// Given a decimal number, write an algorithm to convert the number into a binary form.

let num = Number(prompt("Enter a number: "));

function binaryNum(num){
    let binary = num.toString(2);
    return binary;
}

console.log(binaryNum(num));