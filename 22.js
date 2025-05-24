// Niven Number

// Write a program to accept a number and check and display whether it is a Niven Number or not.
// Niven Number is that a number which is divisible by its sum of digits.

let num = prompt("Enter a number : ");

function NivenNumber(n){
    const arr = n.split("");
    let sum = 0;
    
    for(let digits of arr){
        sum += Number(digits);
    }
    
    return Number(n)%sum === 0;
}
console.log(NivenNumber(num));