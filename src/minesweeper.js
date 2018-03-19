// This is what a blank line would look like
const blankLine = '  |   |  ';
// Print out an empty board
console.log('This is what an empty board would look like:');
for (let i = 0; i < 3 ; i++) {
  console.log(blankLine);
}
// This is what a line would look like with a guess on it
const guessLine = '1 |   |  ';
// This is what a line with a bomb on it would look like
const bombLine = '  | B |  ';
// Print out a board with a guess and a bomb on it
console.log('This is what a board with a guess and a bomb on it would look like');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
