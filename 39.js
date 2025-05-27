// A company wishes to transmit data to another server. 
// The data consists of numbers only. 
// To secure the data during transmission, they plan to reverse the data during transmission, 
// they plan to reverse the data first.
// Write an algorithm to reverse the data first 

let num = Number(prompt("Enter first value: "));

function reverse(num){
    num = num.toString();
    let rev = "";

    for(let i=num.length-1; i>=0; i--){
        rev += num[i];
    }
    let res = Number(rev);
    return res;
}
console.log("reverse: ",reverse(num));