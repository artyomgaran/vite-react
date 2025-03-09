import { useState } from "react";
import Field from "../Field/Field";
import Information from "../Information/Information";
import styles from "./Game.module.css";

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикали
  [0, 4, 8], [2, 4, 6] // Диагонали
];

function Game() {
  const [field, setField] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handleCellClick = (index) => {
    if (field[index] || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    if (checkWinner(newField, currentPlayer)) {
      setIsGameEnded(true);
      return;
    }

    if (!newField.includes("")) {
      setIsDraw(true);
      setIsGameEnded(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (field, player) => {
    return WIN_PATTERNS.some(pattern =>
      pattern.every(index => field[index] === player)
    );
  };

  const resetGame = () => {
    setField(Array(9).fill(""));
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
  };

  return (
    <div className={styles.game}>
      <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
      <Field field={field} onCellClick={handleCellClick} />
      <button className={styles.resetButton} onClick={resetGame}>Начать заново</button>
    </div>
  );
}

export default Game;
