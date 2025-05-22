// Check Birth Day

// Lisa always forgets her birthday which is on th 5th July. 
// So develop a function/method which will be helpful to remember her birthday.

// The function/method checkBirthday return an integer 1, if it is her birthday else return 0. 
// the function/method checkBirthday accepts two arguments.
// Month, a string representing the month of her birth and 
// day, an integer representing the data of her birthday.

let Day = prompt("Enter Day: ");
let Month = prompt ("Enter Month: ");

function checkBirthday(day,month){
    let days = Number(day);
    let result =1;
    let months = month;
    if(days !== 5 && months !== "July") {
        result= 0;
    }
    return result;
}

console.log(checkBirthday(Day,Month));