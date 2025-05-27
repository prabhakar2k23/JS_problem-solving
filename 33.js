// Email name should be starts with alphabet and should follw by number or underscore. 
// It should contains either numbers or underscore finally ends with @gmail.com only, 
// Then given email id is true otherwise false.

let email = prompt("Enter your email ID:");
let pattern = /^[a-zA-Z]+[0-9_]*@gmail\.com$/;

if (pattern.test(email)) {
    console.log("✅ Valid email address");
} else {
    console.log("❌ Invalid email address");
}
