const Gameboard = (function () {
  const board = [
    ["", "", ""], 
    ["", "", ""], 
    ["", "", ""], 
  ];

  function showBoard () {
    return board;
  }
  return {
    showBoard,
  }
})();

function player(name, marker) {
  return {
    name,
    marker,
  }
}