// To check whether the given year is leap year or not.

let year = Number(prompt("Enter a year: "));
if(year%4==0 && year%100!==0 || year%400==0){
    console.log("Leap year");
}else{
    console.log("Not a Leap year");
}