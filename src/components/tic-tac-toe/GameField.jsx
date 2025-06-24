import Cell from "./Cell.jsx";
import styles from "./styles.module.css";

export default function GameField({ board, onCellClick, isXNext }) {
    return (
        <div className={styles.gameField}>
            {board.map((value, index) => (
                <Cell key={index} value={board[index]} onCellClick={() => onCellClick(index)} />
            ))}
        </div>
    );
}
