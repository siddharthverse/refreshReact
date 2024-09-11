import { useState } from 'react';
import './../../Square.css';

const Square = () => {
  const [value, setValue] = useState<React.ReactNode>(null);
  const handleClick = () => {
    console.log('Clicked');
    setValue('X');
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

// https://react.dev/learn/tutorial-tic-tac-toe
// Completing the game

const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
