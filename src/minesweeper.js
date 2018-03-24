const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  board = [];
  for(rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for(columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  board = [];
  for(rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for(columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }
  numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    randomRowIndex = Math.floor(Math.random() * numberOfRows);
    randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // need to update to ensure bombs aren't place on top of existing bombs
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
};

const printBoard = board =>
  console.log(board.map( row => row.join('|') ).join('\n'));

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
