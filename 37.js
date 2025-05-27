// Implement the following function
// 	int BlackJack(int n1,int n2);

// the function accepts two +ve integers n1 and n2 as its arguments. 
// Implement the function on given two vlaues to return an int value as follows

// return whichever value is nearest to 21 without going over. Return if they go both go over.

let in1 = Number(prompt("Enter first value: "));
let in2 = Number(prompt("Enter second value: "));

function BlackJack(n1,n2){
    let num1 = abs(21-n1);
    let num2 = abs(21-n2);
    if(num1<num2){
        console.log("nearest value of 21 is: ",num1);
    }else{
        console.log("nearest value of 21 is: ",num2);
    }
}
BlackJack(in1,in2);
