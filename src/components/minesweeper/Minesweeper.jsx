import {useEffect, useState} from "react";
import styles from './minesweeper.module.css';

const mineCount = 5;
const fieldSize = 20;

export default function Minesweeper() {
    const [gameField, setGameField] = useState([]);
    const [historyList, setHistoryList] = useState([]);
    useEffect(() => {
        const field = Array.from({length: fieldSize}, (_, index) => {
            return {
                id: index,
                mine: 0,
                isOpen: false,
                nearestCount: 0,
            };
        });
        while (!isFieldWithMine(field)) {
            const randomIndex = Math.floor(Math.random() * fieldSize);
            if (!isCellWithMine(randomIndex, field)) {
                field[randomIndex].mine = 1;
            }
        }
        field.forEach((cell, index) => {
            if (cell.mine === 1) return;
            let count = 0;
            if (index >= 0 && isCellWithMine(index - 1, field)) count++;
            if (index <= fieldSize - 1 && isCellWithMine(index + 1, field)) count++;
            cell.nearestCount = count;
        });
        setGameField(field);
    }, []);

    function isCellWithMine(cellId, field) {
        return field[cellId]?.mine === 1;
    }

    function isFieldWithMine(field) {
        return field.filter(cell => cell.mine === 1).length === mineCount;
    }

    function goBack() {
        if (historyList.length === 0) return;
        const lastGameField = historyList[historyList.length - 1];
        setGameField(lastGameField);
        setHistoryList(prevH => prevH.slice(0, -1));
    }

    function cellClick(cellId) {
        openAllNeighbours(cellId);
        setHistoryList(prevH => [...prevH, JSON.parse(JSON.stringify(gameField))]);
        setGameField(prevGameField =>
            prevGameField.map(c =>
                c.id === cellId ? {...c, isOpen: true} : c
            )
        );
    }

    function openAllNeighbours(cellId, visited = new Set()) {
        if (visited.has(cellId)) return;
        visited.add(cellId);

        const cell = gameField[cellId];
        if (cell.isOpen || cell.mine === 1) return;

        setGameField(prevGameField =>
            prevGameField.map(c =>
                c.id === cellId ? {...c, isOpen: true} : c
            )
        );

        if (cell.nearestCount === 0) {
            const neighbours = getNeighbours(cellId);
            neighbours.forEach(neighbourId => openAllNeighbours(neighbourId, visited));
        }
    }

    function getNeighbours(cellId) {
        const neighbours = [];
        if (cellId > 0) neighbours.push(cellId - 1);
        if (cellId < fieldSize - 1) neighbours.push(cellId + 1);
        return neighbours;
    }

    function getStyle(cell) {
        return cell.isOpen
            ? {backgroundColor: cell.mine === 1 ? 'red' : 'green'}
            : {backgroundColor: 'lightgray'};
    }

    return (
        <section id="task4">
            <h2>Task4: minesweeper</h2>
            <div>
                <div className={styles.row}>
                    {
                        gameField.map(cell => {
                            return (
                                <div
                                    key={cell.id}
                                    className={styles.fieldCell}
                                    style={getStyle(cell)}
                                    onClick={() => cellClick(cell.id)}
                                >
                                    {cell.isOpen && (cell.mine === 1 ? '💣' : cell.nearestCount)}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <hr/>
            <button disabled={historyList.length === 0} onClick={goBack}>
                Back
            </button>
        </section>
    );
}
