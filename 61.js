// Determine the color of a chess board square

// You are given coordinates, a string that represents the coordinates of a square of the chess board. 
// bellow is the chess board for your reference.

// Return True if the saquare is in white, and false if the square is in Black.

// The coordinates will always represent a valid chess board square. 
// The coordinates will always have the letter first, and the number second.


function isWhiteSquare(coordinates) {
    let column = coordinates[0]; // letter like 'a', 'b', ...
    let row = parseInt(coordinates[1]); // number like 1 to 8

    // Convert letter to number: 'a' = 1, 'b' = 2, ..., 'h' = 8
    let colNum = column.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    // If sum is odd, it's white
    return (colNum + row) % 2 === 1;
}

console.log(isWhiteSquare("a1")); 
console.log(isWhiteSquare("h3"));