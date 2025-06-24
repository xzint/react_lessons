import styles from "./styles.module.css";

export default function Cell({ value, onCellClick }) {
    return (
        <button className={styles.cell} onClick={onCellClick}>
            {value}
        </button>
    );
}
