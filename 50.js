// Sum of digits between two numbers

// Create a function that sums the total number of digits between two numbers inclusive. 
// for example, if the numbers are 19 and 22, then (1+9)+(2+0)+(2+1)+(2+2)=19.

let start = prompt("enter the starting number: ");
let end = prompt("enter the end number: ")

function sumDigits(start,end){
    let st = Number(start);
    let ed = Number(end);
    let sum = 0;
    for(let i=st; i<=ed; i++){
        let digits = i.toString();
        for (let j=0; j<digits.length; j++){
            sum+=Number(digits[j]);
        }
    }
    return sum;
}

console.log(sumDigits(start,end));