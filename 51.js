// Defanging an IP address

// Given a valid IP address, return a defanged version of that IP address. 
// A defanged IP address replaces every period '.' with "[.]".

let ip = prompt("Enter a valid IP address: ");

function defangIP(ip) {
    return ip.split('.').join('[.]');
}

console.log(defangIP(ip));