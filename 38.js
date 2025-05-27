// Implement the following function
// 	int BlackJack(int n1,int n2);

// the function accepts two +ve integers n1 and n2 as its arguments. 
// Implement the function on given two vlaues to return an int value as follows

// return whichever value is nearest to 21 without going over. Return if they go both go over.

function BlackJack(n1, n2) {
    if (n1 > 21 && n2 > 21) {
        return 0;
    } else if (n1 > 21) {
        return n2;
    } else if (n2 > 21) {
        return n1;
    } else {
        return (21 - n1 <= 21 - n2) ? n1 : n2;
    }
}

let in1 = Number(prompt("Enter first value: "));
let in2 = Number(prompt("Enter second value: "));

let result = BlackJack(in1, in2);
console.log("Result:", result);
