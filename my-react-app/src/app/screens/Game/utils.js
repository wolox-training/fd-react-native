const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function calculateWinner(squares) {
  const winnerLine = lines.find(
    ([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
  );
  return winnerLine ? squares[winnerLine[0]] : undefined;
}
export default calculateWinner;
