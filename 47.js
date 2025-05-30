// Oddish or Evenish

// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is Odd, 
// and number is Evenish if the sum of all of its digits is even, 
// if a number is Oddish return Oddish else return Evenish.

let num = prompt("enter a number: ");

function checkNumber(num){
    let sum = 0;
    for(let i=0; i<num.length; i++){
        sum += Number(num[i]);
    }
    let res = sum%2==0 ?  'Evenish' : 'Oddish';
    return res;
}

console.log(checkNumber(num));