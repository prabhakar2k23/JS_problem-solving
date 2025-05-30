// Magic Date

// Program to read date, month and year from the user and check whether it is magic date or not.
// Here are the rules for magic date.

// 1) mm*dd is a 1-digit number that matches the last digit in YYYY
// 2) mm*dd is a 2-digit number that matches the last two digits in YYYY
// 3) mm*dd is a 3-digit number that matches the last three digits in YYYY

let mm = Number(prompt("Enter a month: "));
let dd = Number(prompt("Enter a day: "));
let year = Number(prompt("Enter a number: "));

function magicDate(mm,dd,year){
    let product = mm*dd;
    
    if(year%10==product || year%100==product || year%1000==product){
        return 'Magic date';
    }else{
        return 'Not a magic date';
    }
}

console.log(magicDate(mm,dd,year));