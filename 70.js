// sum of digits
function sumOfDigits(str) {
  let sum = 0;

  for (let char of str) {
    if (!isNaN(char) && char !== ' ') {
      sum += Number(char);
    }
  }

  return sum;
}


console.log(sumOfDigits("a1b2c3"));  // Output: 6
