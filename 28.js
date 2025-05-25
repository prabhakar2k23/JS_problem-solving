// Prime Number or Not

// Write a program to check whether the given number is prime number or not. 
// A number is said to prime if it is having only two factors. i.e. 1 and number itself.
let n = Number(prompt("Enter a number: "));

if (n < 2){
    console.log("not prime");
}else{
    let isPrime = true;
    for(let i=2; i<Math.floor(n/2)+1; i++){
        if(n%i==0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("prime");
    }else{
        console.log("not prime");
    }
}