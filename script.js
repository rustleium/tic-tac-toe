const Gameboard = (function () {
  const board = [
    ["", "", ""], 
    ["", "", ""], 
    ["", "", ""], 
  ];

  function showBoard () {
    return board;
  }

  function placeMark(row, column, marker) {
    board[row][column] = marker;
  }

  function resetBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = ""
      }
    }
  }

  return {
    showBoard,
    placeMark,
    resetBoard,
  }
})();

function player(name, marker) {
  return {
    name,
    marker,
  }
}

const GameController = (function() {
  const playerOne = player("Player 1", "X");
  const playerTwo = player("Player 2", "O");

  let currentPlayer = playerOne;

  function switchPlayer() {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }

  function checkWinner(marker) {
    const board = Gameboard.showBoard();

    // Columns and Rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === marker &&
        board[i][1] === marker &&
        board[i][2] === marker
      ) return true;

      if (
        board[0][i] === marker &&
        board[1][i] === marker &&
        board[2][i] === marker
      ) return true;
    }

    // Diagonals
    if (
      board[0][0] === marker &&
      board[1][1] === marker &&
      board[2][2] === marker 
    ) return true;

    if (
      board[0][2] === marker &&
      board[1][1] === marker &&
      board[2][0] === marker
    ) return true;

    return false;
  }

  function isDraw() {
    const board = Gameboard.showBoard();
    for (let row of board) {
      for (let cell of row) {
        if (cell === "") return false;
      }
    }
    return true;
  }

  function resetGame() {
    Gameboard.resetBoard();
    currentPlayer = playerOne;
    console.log("Game reset");
    printBoard();
  }

  function printBoard() {
    const board = Gameboard.showBoard();
    console.table(board);
  }

  return {
    switchPlayer,
    resetGame,
  }
})();