// Find the Bomb

// Write a function that finds the word "bomb" in the given string (not case sensitive) 
// return "DUCK!" if found, else return "Relax there's no bomb."

let str = prompt("Enter a string: ");

function checkBomb(str) {
    if (str.toLowerCase().includes("bomb")) {
        return "DUCK!";
    } else {
        return "Relax there's no bomb.";
    }
}

console.log(checkBomb(str));