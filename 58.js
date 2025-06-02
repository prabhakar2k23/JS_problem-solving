// Re-form the word

// A word has been split into a left part and right part. 
// Re-form the word by adding both halves together changing the first to an uppercase letter.

function reformWord(left, right) {
    let combined = left + right;
    return combined.charAt(0).toUpperCase() + combined.slice(1);
}

console.log(reformWord("hel", "lo")); 
