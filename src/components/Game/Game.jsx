import { useState } from 'react';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';

function Game() {
	const [field, setField] = useState(Array(9).fill(''));
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const resetGame = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<div className={styles.game}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				field={field}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setCurrentPlayer={setCurrentPlayer}
				currentPlayer={currentPlayer}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
			/>
			<button className={styles.resetButton} onClick={resetGame}>
				Начать заново
			</button>
		</div>
	);
}

export default Game;
