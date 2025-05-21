// implement a program that takes a number as an argument, increments the number by +1 and returns the result

function increaseNum(num){
    ++num;
    return num;
}

let num = Number(prompt("Enter a number: "));
console.log(increaseNum(num));