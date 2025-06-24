import {useEffect, useState} from "react";
import GameField from "./GameField.jsx";
import {calculateWinner} from "./utils.js";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [history, setHistory] = useState([]);
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(cell => cell !== null);

    function gameClick(x) {
        if (calculateWinner(board) || board[x]) {
            return;
        }
        setIsXNext(prev => !prev);
        setBoard(prevBoard => {
            const newBoard = [...prevBoard];
            if (newBoard[x] === null) {
                newBoard[x] = isXNext ? 'X' : 'O';
            }
            return newBoard;
        });
        updateHistory();
    }

    function updateHistory() {
        setHistory(prevHistory => [...prevHistory, [...board]]);
    }

    function back() {
        if (history.length === 0) return;
        const lastBoard = history[history.length - 1];
        setBoard(lastBoard);
        setHistory(prevHistory => prevHistory.slice(0, -1));
        setIsXNext(prev => !prev);
    }

    function restart() {
        setBoard(Array(9).fill(null));
        setHistory([]);
        setIsXNext(true);
    }

    useEffect(() => {
        console.log(history);
    }, [history]);

    const status = winner ? `Winner: ${winner}` : isDraw ? 'Draw' : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <section id="tic-tac-toe">
            <h2>Tic tac toe</h2>
            <p>{status} { (winner || isDraw) ? (<button onClick={restart}>Restart</button>) : ''}</p>
            <p>you can cancel you turn <button onClick={back}>back</button> </p>
            <GameField board={board} isXNext={isXNext} onCellClick={gameClick}/>
        </section>
    );
}
