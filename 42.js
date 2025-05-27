// An e-Commerce company plans to give thier customers a discount for the newyears holiday. 
// The discount will be calcualted on the basis of the bill amount of the order place.
// The discount amount is the product of the sum of all odd digits and the sum of all even digits of 
// the customers total bill amount.

let amount = prompt("Enter your bill amount");
let sumODD = 0;
let sumEven= 0;

for(let i=0; i<amount.length; i++){
    let digit = parseInt(amount[i]);
    if(digit%2==0){
        sumEven += digit;
    }else{
        sumODD += digit;
    }
}

let discount = sumEven * sumODD;

console.log("bill amount       : ",parseInt(amount));
console.log("discount          : ",discount);
console.log("Total amount      : ",parseInt(amount)-discount);