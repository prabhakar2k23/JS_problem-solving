// Anagrams

// Two strings a and b are called anagrams, if they contain all the same characters in the same frequencies.

function isAnagram(a, b) {
    
    if (a.length !== b.length) return false;

    let sortedA = a.split('').sort().join('');
    let sortedB = b.split('').sort().join('');

    return sortedA === sortedB;
}

// Example usage:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false