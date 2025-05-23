// Lucky Customer

// An e-commerce website wishes to find the lucky customer who will be eligible for full value cash back. 
// For this purpose,a number N is fed to the system. 
// It will return another number that is calculated by an algorithm. 
// In the algorithm, a seuence is generated, in which each number n the sum of the preceding numbers. 
// initially the sequence will have two 1's in it. 
// The System will return the Nth number from the generated sequence which is treated as the order ID. 
// The lucky customer will be one who has placed that order. 
// Write an alorithm to help the website find the lucky customer.

function getLuckyOrderID(N) {
    let seq = [1, 1]; 

    for (let i = 2; i < N; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += seq[j];
        }
        seq.push(sum); 
    }

    return seq[N - 1];
}

console.log(getLuckyOrderID(7));