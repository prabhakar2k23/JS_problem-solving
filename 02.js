// Given an integer n, perform the following conditional actions,
// if n is odd, print weird,
// if n is even and in the inclusive range of 2 to 5, print Not Weird.
// if n is even and in the inclusive range of 6 to 20, print Weird.
// if n is even and greater than 20, print Not Weird.

let num = Number(prompt("Enter a number: "));

if(num%2!=0){
    console.log("Weird");  
}else if(num%2==0 && num>=2 && num<=5){
    console.log("Not weird");
}else if(num%2==0 && num>=6 && num<=20){
    console.log("Weird");
}else if(num%2==0 && num>20){
    console.log("Not Weird");
}