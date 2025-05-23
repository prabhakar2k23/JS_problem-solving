// Christmas offer

// An e-commerce company plans to give their customers a special discount for the Christmas, 
// they are planning to offer a flat discount. 
// The discount value is calculated as the sum of all prime digits in the total bill amount.

// Write an algorithm to find the discount value for the given total bill amount.

let amount = prompt("Enter total bill amount: ");
const arr = amount.split("");
sum = 0;
for(let digit of arr){
    let n = Number(digit);
    let isPrime = true;
    if(n<2){
        isPrime = false;
    }else{
        for(let j=2; j<Math.floor(n/2)+1; j++){
            if(n%j==0){
                isPrime = false;
                break;
            }
        }
    }
    if(isPrime){
        sum += n
    }
}
console.log("Bill amount      : ",amount);
console.log("discount         : ",sum);
console.log("Total amount     : ",Number(amount)-sum);