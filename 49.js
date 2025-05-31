// Next Prime

// Given an integer, create a function that returns the next prime. 
// If the number is prime, return the number itself.

let num = Number(prompt("Enter a number: "));

function checkNextPrime(num) {
    while (true) {
        let isPrime = true;
        
        if (num < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            return num;
        } else {
            num++;
        }
    }
}

console.log(checkNextPrime(num));
