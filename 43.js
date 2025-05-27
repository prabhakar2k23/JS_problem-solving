// War of Numbers

// There is a great war between the even and odd numbers. 
// Many numbers already lost thier life in this war and its your task to end this. 
// You have to determine which group sums larger. the even, or the odd, the larger group wins.

// Create a function that takes an array of integers , sums the even and odd numbers seperately, 
// then return the difference between sum of even and odd numbers.

let amount = prompt("Enter numbers seperated by space: ");
let arr = amount.split(" ").map(Number);
console.log(arr);
let sumODD = 0;
let sumEven= 0;

function warOfNumbers(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            sumEven += arr[i];
        }else{
            sumODD += arr[i];
        }
    }
    return Math.abs(sumEven-sumODD);
}

console.log(warOfNumbers(arr));