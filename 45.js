// Perfect Number

// Create a function that tests whether or not an integer is a perfect number. 
// A perfect number is a number that can be written as sum of its factors. 
// (equal to sum of its proper divisors) excluding the number itself.

let num = Number(prompt("Enter a number: "))
function perfectNumber(num){
    let sum = 0;
    for(let i=1; i<Math.floor(num/2)+1; i++){
        if(num%i==0){
            sum += i;
        }
    }
    if(num === sum){
        return 'Perfect number'
    }else{
        return 'Not a perfect number'
    }
}

console.log(perfectNumber(num));