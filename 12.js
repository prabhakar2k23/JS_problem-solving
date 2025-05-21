// Program to read a number and check whether it is duck number or not.
// Hint: A duck number is a number which has zeros present in it, but no zero present in the begining of the number.


let num =prompt("Enter a number: ")
let count=0
if(num[0]=='0'){
    console.log("Not a duck number");
}else{
    for(let i=1; i<num.length; i++){
       if(num[i]=='0'){
           count+=1
       }
    }
    if(count==0){
        console.log("Not a duck number");
    }else{
        console.log("Duck Number");
    }
}