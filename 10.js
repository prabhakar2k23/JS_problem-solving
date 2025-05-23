// Implement a program to calculate sum of prime digits present in the given number
let num = prompt("Enter a number: ");
const arr = num.split("");
let sum = 0;

for (let digit of arr) {
    let n = Number(digit);
    let isPrime = true;
    if(n<2){
        isPrime = false;
    }else{
        for(let i=2; i<Math.floor(n/2)+1; i++){
            if(n%i==0){
                isPrime = false;
                break;
            }
        }
    }
    if(isPrime){
        console.log("prime digit: ",n);
        sum += n;
    }
}

console.log("Sum of prime digits =", sum);