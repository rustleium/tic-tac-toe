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

  return {
    switchPlayer,
  }
})();