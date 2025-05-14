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

  return {
    showBoard,
    placeMark,
  }
})();

function player(name, marker) {
  return {
    name,
    marker,
  }
}