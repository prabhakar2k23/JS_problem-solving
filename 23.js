// A Special two digit number

// A special two digit number is a number such that when the sum of its digits is added to the product of its digits, the result should be equal to the original two-digit number.

// Implement a program to accept a two digit number and check whether it is a special two digit number or not.

let num = Number(prompt("Enter a two-digit number: "));

function checkSpecial(n){
    if (n>=10 && n<=99){
        let a = Math.floor(n/10);
        let b = n%10;
        
        let sum = a + b;
        let product = a * b;
        sum + product === n ? alert(n + " is a special two-digit number") : alert(n + " is Not a special two-digit number");
    }else{
        alert("Please Enter a two-digit number!");
    }
}
checkSpecial(num);