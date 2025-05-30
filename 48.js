// Accept video length in minutes the format is mm:ss in String format, 
// create a function that takes video length and return it in seconds.

let num = prompt("enter the videolength in mm:ss format: ");

function checkSecond(num){
    let arr = num.split(":");
    
    let minutes = Number(arr[0])*60;
    let seconds = Number(arr[1]);
    
    let second = minutes + seconds;
    return second;
}

console.log(checkSecond(num),'seconds');