// The discount value is calculated as the sum of all prime digits and add gst in total amount.

let amount = prompt("Enter total bill amount: ");
const arr = amount.split("");
let sum = 0;
let primeDigits = ['2','3','5','7'];

for(let digit of arr){
    if(primeDigits.includes(digit)){
        sum += Number(digit);
    }
}

let gst = (Number(amount)*6)/100;
console.log("Bill amount       :  ",amount);
console.log("discount          : -",sum);
console.log("Gst(6%)           : +",gst)
console.log("Total amount      :  ",Number(amount)-sum+gst,"RS.");