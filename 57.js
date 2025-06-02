// Shuffle the Name

// Create a function/method that accepts a string (of person�s first and last name) and 
// returns a string with in first and last name swapped). 
let fullName = prompt("Enter full name (first and last): ");

function shuffleName(fullName) {
    let parts = fullName.trim().split(" ");
    if (parts.length !== 2) {
        return "Please enter exactly two names (first and last)";
    }
    return parts[1] + " " + parts[0];
}

console.log(shuffleName(fullName));
