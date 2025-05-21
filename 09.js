// Implement a program to calculate sum of prime digits present in the given number
let num = prompt("Enter a number: ");
const arr = num.split("");
let sum = 0;

const primeDigits = ['2', '3', '5', '7'];

for (let digit of arr) {
    if (primeDigits.includes(digit)) {
        console.log("Prime digit in given number:", digit);
        sum += Number(digit);
    }
}

console.log("Sum of prime digits =", sum);
