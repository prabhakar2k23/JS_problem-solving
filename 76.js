// Andy, Ben and Charlotte are playing a board game. 
// The three of them decided to come up with a new scoring system. 
// A player's first initial ("A","B" & "C") denotes that players scoring a single point. 
// Given a string of capital letters. returns an array of the player's scores.
let input = prompt("Enter score string (A, B, C only): ");

function calculateScores(scoreString) {
  let scores = [0, 0, 0];  

  for (let char of scoreString) {
    if (char === 'A') scores[0]++;
    else if (char === 'B') scores[1]++;
    else if (char === 'C') scores[2]++;
  }

  return scores;
}

console.log(calculateScores(input));  // e.g. "ABACBCAB" → [3, 3, 2]
