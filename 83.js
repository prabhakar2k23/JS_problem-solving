// Say "Hello" Say "Bye"

// Write a function that takes a string name and number num (either 1 or 0) and 
// return "Hello"+name if number is 1, otherwise "Bye"+name.

let name = prompt("Enter your name:");
let num = prompt("Enter 1 for Hello or 0 for Bye:");
num = Number(num);

if (num === 1) {
  console.log("Hello " + name);
} else if (num === 0) {
  console.log("Bye " + name);
} else {
  console.log("❌ Invalid input. Please enter only 1 or 0.");
}