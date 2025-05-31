// Jewels and Stones

// You are given Strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. 
// Each character in stones is a type of stone you have 
// you want to know how many of the stones you have are also jewels.

// Letter are case sensitive. so "a" is considered as a different type of stone from "A".

let jewels = 'xYaA';
let stones = 'aAbAxYbYzvmaAb';

function numJewelsInStones(jewels, stones) {
   let jewelSet = new Set(jewels);
   let count = 0;
   
   for(let stone of stones){
       if(jewelSet.has(stone)) count++;
   }
   return count;
}
console.log(numJewelsInStones(jewels, stones)); 