// Implement a program to calculate sum of digits present in the given number
let num = prompt("Enter a number: ");
const arr = num.split("");
digit = 0;
sum=0;
for (let i=0; i<arr.length; i++){
    digit+=1;
    sum+=Number(arr[1]);
}
console.log("digit= ",digit);
console.log("Sum of digits= ",sum)