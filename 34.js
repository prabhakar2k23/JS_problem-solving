// The IT company "Soft ComInfo" has decided to transfer its messages through 
// the N/W using new encryption technique. 
// The company has decided to encrypt the data using the non-prime number concept.
// The message is in the form of a number and 
// the sum of non-prime digits present in the message is used as the encryption key.

// Write an algorithm to determine the encryption key.

let num = prompt("Enter bill amount: ");
let primeDigits = [2,3,5,7];
let sum=0;

function encryptKey(n){
    for(let i=0; i<n.length; i++){
        let digit = Number(n[i]);
        
        if(!primeDigits.includes(digit)){
            sum += digit
        }
    }
    return sum;
}
console.log("encryption key: ",encryptKey(num));