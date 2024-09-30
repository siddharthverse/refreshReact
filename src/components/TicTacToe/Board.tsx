import { useState } from 'react';
import './../../Square.css';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  // {
  //   console.log(`square fn ${value}`);
  // }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // handle board click
  const handleBoardClick = (i: number) => {
    if (square[i] || calculateWinningCombo(square)) {
      return;
    }

    // handle X or O
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setXIsNext(!xIsNext);
    setSquare(nextSquares);
  };

  const winner = calculateWinningCombo(square);
  let status;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next player is ${xIsNext ? 'X' : 'O'}`;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleBoardClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleBoardClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleBoardClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleBoardClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleBoardClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleBoardClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleBoardClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleBoardClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleBoardClick(8)} />
      </div>
    </>
  );
};

const calculateWinningCombo = (squares: Array<string | null>) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
