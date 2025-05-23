// binary to decimal

let binary = Number(prompt("Enter a binary number: "));

function binaryNum(num){
    let decimal = parseInt(num, 2);
    return decimal;
}

console.log(binaryNum(binary));