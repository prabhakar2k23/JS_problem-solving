// check palindrome
function isPalindromeNumber(num){
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
let num = Number(prompt("Enter a number: "));
console.log(isPalindromeNumber(num));