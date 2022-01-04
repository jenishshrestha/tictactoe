import React from "react";
import { useLocalStorageState } from "../functions/utils";
import {
  calculateStatus,
  calculateNextValue,
  calculateWinner,
} from "../functions/boardFunctions";

const Board = () => {
  const initialSquares = Array(9).fill(null);

  //  squares is the state for this component. Add useState for squares
  const [squares, setSquares] = useLocalStorageState("squares", initialSquares);

  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);
  const status = calculateStatus(winner, squares, nextValue);

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }

    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
  }

  function restart() {
    setSquares(initialSquares);
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  );
};

export default Board;
