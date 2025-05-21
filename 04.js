// The e-commerce company Bookshelf wishes to analyse its monthly sales data between minimum range 30 to max range 100. The company has categorized these book sales into four groups depending on the number of sales with the help of these groups the company will know which stock they should increase or decrease in their inventory for the next month. the groups are as follows

// sales range		groups
// 30-50 ------------------> D
// 51-60 ------------------> C
// 61-80 ------------------> B
// 81-100 -----------------> A

let num = Number(prompt("Enter a number: "));
if(num>=30 && num<=50){
    groups = 'D';
}else if(num>=51 && num<=60){
    groups = 'C'
}else if(num>=61 && num<=80){
    groups = 'B'
}else if(num>=81 && num<=100){
    groups = 'A'
}
console.log("Group: ",groups);