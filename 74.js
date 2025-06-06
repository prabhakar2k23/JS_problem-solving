
// X's and O's, Nobody knows

// Create a function that takes a string, 
// check if it has the same number of x's and o's and returns either true or false.

// Rules:

// 1. return boolean value true or false.
// 2. returns true if the amount x's and o's are the same.
// 3. returns false if they are not the same amount.
// 4. the string can contains any character.
// 5. when 'x' and 'o' are not in the string, return true.

let input = prompt("Enter a string: ");

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let char of str.toLowerCase()) {
    if (char === 'x') xCount++;
    else if (char === 'o') oCount++;
  }
  
  return xCount === oCount;
}

console.log(XO(input));