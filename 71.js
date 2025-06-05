// Change uppercase letters to lowercase and vice versa.

function swapCase(str) {
  let result = "";

  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      result += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

console.log(swapCase("HeLLo WoRLd"));  // Output: "hEllO wOrlD"