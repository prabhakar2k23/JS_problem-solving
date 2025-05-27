// Jackson, a math student, is developing an application on prime numbers. 
// for the given two integers on the display of the application, 
// the user has to identify all the prime numbers within the given range (including the given values). 
// afterwards the application will sum all those prime numbers. 
// Jackson has to write an algorithm to find the sum of all the prime numbers of the given range.

// Write an algorithm to find the sum of all the prime numbers of the given range.

// input -----> two space sepearted integers RL and RR.
// output ----> sum of the prime numbers between RL and RR.

let RL = Number(prompt("enter your RL vamue: "));
let RR = Number(prompt("enter your RR value: "));
let sum = 0;

for (let i=RL; i<=RR; i++){
    let isPrime = true;
    
    if(i<2){
        isPrime = false;
    }
    else{
      for(let j=2; j<Math.floor(i/2)+1; j++){
         if(i%j == 0){
             isPrime = false;
             break;
         }
      }
    }
    if(isPrime){
        sum += i;
    }
}
console.log(sum)