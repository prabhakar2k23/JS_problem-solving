// Find the Most Frequent Character

function mostFrequentChar(str) {
  const freqMap = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;

    if (freqMap[char] > maxCount) {
      maxCount = freqMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(mostFrequentChar("successes"));  // Output: "s"
