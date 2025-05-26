// An e-commerce company plans to give their customers a discount for the newyears holiday. 
// The discount will be calcualted on the basis of the bill amount of the order placed. 
// The discount amount is the sum of all the odd digits in the customers total bill amount. 
// if no odd digits is present in the bill amount, then discount will be zero.

let num = prompt("Enter bill amount:");
let count=0;
for(let i=0; i<num.length; i++){
    if(Number(num[i])%2!=0){
        count += Number(num[i]);
    }
}
let discount = count;
console.log("amount       : ",Number(num));
console.log("discount     : ",discount);
console.log("total amount : ",Number(num)-discount);