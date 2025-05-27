// One Time Password

// A company wishes to devise an order confirmation procedure. 
// They plan to require an extra confirmation instead of simply auto-confirming 
// the order at the time it is placed. for this purpose, 
// the system will generate one time password to be shared with the customer. 
// The customer who is placing the order has to enter the OTP to confirm the order. 
// The OTP generated for the requested order ID, as the product of the digits in orderID. 

// Write an algorithm to find the OTP for the OrderID.

let orderId = Number(prompt("enter your order id: "));

function generateOtp(orderID){
    let digits = orderID.toString();
    let otp = 1;
    for(let i=0; i<digits.length; i++){
        let digit = parseInt(digits[i]);
        if (digit === 0) continue;
        otp *= digit;
    }
    return otp;
}

console.log("OTP: ",generateOtp(orderId));