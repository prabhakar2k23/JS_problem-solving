//Reverse Integer
let num = prompt("Enter a number: ");
const arr = num.split("");
let rev='';
for (let i=arr.length-1; i>=0; i--){
    rev += (arr[i]);
}
rev = Number(rev)

console.log(rev)