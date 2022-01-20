import React from "react";
import Board from "./Board";
import { useLocalStorageState } from "../functions/utils";
import {
  calculateStatus,
  calculateNextValue,
  calculateWinner,
} from "../functions/boardFunctions";

const Game = () => {
  const initialSquares = Array(9).fill(null);

  //  squares is the state for this component. Add useState for squares
  // const [squares, setSquares] = useLocalStorageState("squares", initialSquares);

  const [currentStep, setCurrentStep] = useLocalStorageState(
    "ticTacToe-Steps",
    0
  );
  const [history, setHistory] = useLocalStorageState("ticTacToe-History", [
    initialSquares,
  ]);

  const squares = history[currentStep];

  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);
  const status = calculateStatus(winner, squares, nextValue);

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }

    const newHistory = history.slice(0, currentStep + 1);
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;

    setHistory([...newHistory, squaresCopy]);
    setCurrentStep(newHistory.length);
  }

  function restart() {
    setHistory([initialSquares]);
    setCurrentStep(0);
  }

  const moves = history.map((stepSquares, step) => {
    const desc = step === 0 ? `Got to game start` : `Go to move #${step}`;
    const isCurrentStep = step === currentStep;
    return (
      <li key={step}>
        <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
          {desc} {isCurrentStep ? "(current)" : null}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={squares} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
