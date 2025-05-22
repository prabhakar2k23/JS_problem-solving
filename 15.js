// check palidrome
function isPalindromeNumber(num){
    let OriginalNum = num;
    let reversed = 0;
    
    while(num>0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num/10);
    }
    return OriginalNum === reversed;
}
let num = Number(prompt("Enter a number: "));
console.log(isPalindromeNumber(num));