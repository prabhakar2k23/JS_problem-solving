// Find The Sequence Sum

// Given three integers i,j&k, a sequence sum to be the value of 
// i+(i+1)+(i+2)..+j+(j-1)+(j-2)+..+k

// 1st way: i+(i+1)+(i+2)..+j and (j-1)+(j-2)+..+k ===> we have taken
// 2nd way: i+(i+1)+(i+2).. and j+(j-1)+(j-2)+..+k


// (increment from i until it equals to j, then decrement from j until equals k). Given values i,j,k. 
// caluclate the sequence sum as described.

// logic
// sum=0
// while(i<=j){sum=sum+(i++);}
// while(j!=k){sum=sum+(--j);}
// print sum

let i = Number(prompt("Enter the value of i: "));
let j = Number(prompt("Enter the value of j: "));
let k = Number(prompt("Enter the value of k: "));

function getSequenceSum(i,j,k){
    let sum = 0;
    
    if(i<=j){
        while(i<=j){
            sum += i++;
        }
    }else{
        while(i>=j){
            sum += i--;
        }
    }
    
    if(j<k){
        while(j<k){
            sum += ++j;
        }
    }else if(j>k){
        while(j>k){
            sum += --j;
        }
    }
    return sum;
}
console.log(getSequenceSum(i,j,k));