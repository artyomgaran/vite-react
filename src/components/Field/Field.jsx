import PropTypes from "prop-types";
import Cell from "../Cell/Cell";
import styles from "./Field.module.css";

function Field({ field, onCellClick }) {
  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired
};

export default Field;
