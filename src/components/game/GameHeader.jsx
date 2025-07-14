import {useEffect} from "react";
import styles from "./GameBox.module.css";

export default function GameHeader({randomNumbers, setRandomNumbers, guessedNumbers = [], winner, setWinner}) {
    function newGame() {
        setRandomNumbers(generateRandomNumbers());
        guessedNumbers.length = 0;
        setWinner(null);
    }
    function generateRandomNumbers(count = 3) {
        const numbers = new Set();
        while (numbers.size < count) {
            numbers.add(Math.floor(Math.random() * 10));
        }
        return Array.from(numbers);
    }

    useEffect(() => {
        setRandomNumbers(generateRandomNumbers());
    }, [setRandomNumbers]);

    function isGuessed(num) {
        return guessedNumbers.includes(num);
    }

    let newGameContent = <div>
        <h2>Гра закінчена, переміг - {winner}</h2>
        <button onClick={() => newGame()}>Заново</button>
    </div>

    return (
        <div className="game-header">
            <h1>Гра вгадай число</h1>
            {
                (winner && !!guessedNumbers.length) && newGameContent
            }
            <div>
                {randomNumbers?.length > 0 &&
                    <div className={styles.numbersWrapper}>
                        <p>Загадані числа:</p>
                        <ul className={styles.numberList}>
                            {randomNumbers.map((num, index) => (
                                <li key={index} className={
                                    `${styles.numberCell}  ${isGuessed(num) ? styles.guessed : ''}`
                                }>{isGuessed(num) ? num : ''}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>

        </div>
    );
}
