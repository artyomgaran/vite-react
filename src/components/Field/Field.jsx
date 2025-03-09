import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Вертикали
	[0, 4, 8],
	[2, 4, 6], // Диагонали
];

function Field({
	field,
	setField,
	setIsGameEnded,
	setCurrentPlayer,
	currentPlayer,
	setIsDraw,
	isGameEnded,
}) {
	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		if (checkWinner(newField, currentPlayer)) {
			setIsGameEnded(true);
			return;
		}

		if (!newField.includes('')) {
			setIsDraw(true);
			setIsGameEnded(true);
			return;
		}
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	const checkWinner = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
}

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setField: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	currentPlayer: PropTypes.string.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};

export default Field;
