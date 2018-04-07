const handleGridClick = (grid, squareParams) => {

  console.log(squareParams)
  
  let gridHeight = grid.length;
  let gridWidth = grid[0].length;
  let lost = false;

  const getSurroundingSquares = (params) => {
    const output = [];
    let currX = params[0];
    let currY = params[1];
    // iterate and make sure it's fine
    output.push([currX - 1, currY - 1], [currX, currY - 1],
    [currX - 1, currY], [currX + 1, currY],
    [currX, currY + 1], [currX + 1, currY + 1],
    [currX - 1, currY + 1], [currX + 1, currY - 1])
    
    return output;
  }

  if (squareParams[0] < 0 || squareParams[0] > gridHeight - 1) {
    return {grid, lost}
  }
  
  if (squareParams[1] < 0 || squareParams[1] > gridWidth - 1) {
    return {grid, lost}
  }
  
  if (grid[squareParams[0]][squareParams[1]][1] === 1) {
    return {grid, lost}
  }
  
  if (grid[squareParams[0]][squareParams[1]][0] === 'X') {
    //if they click on a mine, blow up the board
    for (let i = 0; i < gridHeight; i++) {
      for (let j = 0; j < gridWidth; j++) {
        grid[i][j][1] = 1;
        lost = true;
      }
    } 
  }
  else {
    //otherwise, display the number. If it's a zero, we'll have to do some other things.
    
    if (grid[squareParams[0]][squareParams[1]][0] === 0) {
      let surroundingSquares = getSurroundingSquares(squareParams)
      for (let i = 0; i < surroundingSquares.length; i++) {
        grid[squareParams[0]][squareParams[1]][1] = 1
        handleGridClick(grid, [surroundingSquares[i][0], surroundingSquares[i][1]])
      }
    }
    else {
      grid[squareParams[0]][squareParams[1]][1] = 1;
    }
    
    
  }
  
  return {grid, lost};
  
}

const makeMinesweeperBoard = (height, width, mines) => {
  
  let board = [];
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const findSurroundingMines = (board, height, width, currX, currY) => {
    let mineCount = 0
    
    let squaresToCheck = [[currX - 1, currY - 1], [currX, currY - 1],
    [currX - 1, currY], [currX + 1, currY],
    [currX, currY + 1], [currX + 1, currY + 1],
    [currX - 1, currY + 1], [currX + 1, currY - 1]]
    
    squaresToCheck.forEach(square => {
      if (square[0] >= 0 && square[1] >= 0 && square[0] < height && square[1] < width && board[square[0]][square[1]][0] === 'X') {
        mineCount += 1
      }
    })
    
    return mineCount
  }
  
  for (let i = 0; i < height; i++) {
    board.push([])
    for (let j = 0; j < width; j++) {
      board[i].push([null, 0])
    }
  }
  

  let minesNeeded = mines;
  let minesAdded = 0;
  while (minesAdded < minesNeeded) {
    let randomHeight = getRandomInt(height)
    let randomWidth = getRandomInt(width)
    if (board[randomHeight][randomWidth][0] === null) {
      board[randomHeight][randomWidth][0] = 'X';
      minesAdded += 1;
      }
  }
  
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let currentSquare = [i, j]
      if (board[i][j][0] === null) {
        board[i][j][0] = findSurroundingMines(board, height, width, i, j)
      }
    }
  }
  
  return board
}

module.exports.makeMinesweeperBoard = makeMinesweeperBoard;
module.exports.handleGridClick = handleGridClick;



