// VALID ZIP CODE

// zipcodes consists of 5 consecutive digits.
// Given a string, write a function to determine whether the input is a valid zip code. 
// a valid zipcode is as follows

// 1. must contain only numbers.
// 2. it should not contain any spaces.
// 3. length should be only 5.

function isValidZip(zip) {
  if (zip.length === 5 && /^\d{5}$/.test(zip)) {
    return true;
  } else {
    return false;
  }
}


let input = prompt("Enter a ZIP code:");
if (isValidZip(input)) {
  alert("✅ Valid ZIP code!");
} else {
  alert("❌ Invalid ZIP code. Must be 5 digits, no spaces, only numbers.");
}
