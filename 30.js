// Create PIN using Three given numbers

// "Secure Assets Private Ltd", a small company that deals with lockers has recently started manufacturing digital locks which can be locked and unlocked using PINs (passwords). 
// You have been asked to work on the module that is expected to generate PINs using three input numbers.

// The three given input numbers will always consist of three digits each 
// i.e. each of them will be in the range >=100 and <=999.

// Bellow are the rules for generating the PIN.

// 1. The PIN should made up of 4 digits.
// 2. The unit (ones) position of the PIN should be the least of the units position of the three numbers.
// 3. The tens position of the PIN should be the least of the tens position of the three input numbers.
// 4. The hundreds position of the PIN should be least of the hundreds position of the three numbers.
// 5. The thousands position of the PIN should be the max of all digits in the three input numbers.

let num1 = Number(prompt("Enter first 3-digit number:"));
let num2 = Number(prompt("Enter second 3-digit number:"));
let num3 = Number(prompt("Enter third 3-digit number:"));

// Extract hundreds, tens, and ones digits from each number
let h1 = Math.floor(num1 / 100);
let t1 = Math.floor((num1 % 100) / 10);
let o1 = num1 % 10;

let h2 = Math.floor(num2 / 100);
let t2 = Math.floor((num2 % 100) / 10);
let o2 = num2 % 10;

let h3 = Math.floor(num3 / 100);
let t3 = Math.floor((num3 % 100) / 10);
let o3 = num3 % 10;

// Thousands digit: max of all digits
let allDigits = [h1, t1, o1, h2, t2, o2, h3, t3, o3];
let thousands = Math.max(...allDigits);

let hundreds = Math.min(h1, h2, h3);

// Tens digit: min of the tens place
let tens = Math.min(t1, t2, t3);

// Ones digit: min of the ones place
let ones = Math.min(o1, o2, o3);

// Combine to form the final PIN
let pin = `${thousands}${hundreds}${tens}${ones}`;

// Output the PIN
console.log("Generated PIN:", pin);