// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. 
// Implement a program that takes n cups bought and print as an integer the total number of cups I would get.

function totalCups(num){
    const freeCups = Math.floor(num/6);
    const total = num + freeCups;
    console.log("you buy ",num," cup coffee.");
    console.log("free cup coffee ",freeCups);
    console.log("Total coffee = ",total)
}
let num = Number(prompt("Enter a number: "));
totalCups(num);