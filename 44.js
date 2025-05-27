// Given an array of integers, find the maximum number in the array.

let Input= prompt("Enter the numbers separated by space: ");
let arr = Input.split(" ").map(Number);
function findMax(arr){
    let max = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(arr);
console.log("max number: ",findMax(arr));