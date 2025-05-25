// You are climbing a stair case. 
// It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

function climbStairs(n) {
  if (n <= 2) return n;

  let first = 1; // ways to climb 1 step
  let second = 2; // ways to climb 2 steps

  for (let i = 3; i <= n; i++) {
    let third = first + second;   
    first = second;
    second = third;
  }

  return second;
}

console.log(climbStairs(4))