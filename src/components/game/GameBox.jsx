import GameHeader from "./GameHeader.jsx";
import {useEffect, useState} from "react";
import PlayersContainer from "./PlayersContainer.jsx";

export default function GameBox() {
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [guessedNumbers, setGuessedNumbers] = useState([]);
    const [isActiveFirstPlayer, setIsActiveFirstPlayer] = useState(true);
    const [winner, setWinner] = useState(null);

    function makeMove({playerName, guessedNumber}) {
        console.log(playerName, guessedNumber);
        if (guessedNumbers.includes(guessedNumber)) {
            alert("Це число вже вгадано");
            return;
        }
        setGuessedNumbers([...guessedNumbers, guessedNumber]);

        setIsActiveFirstPlayer(prev => !prev);
    }

    useEffect(() => {
        console.log('test', isGameOver(), randomNumbers, guessedNumbers);
        if (isGameOver() && randomNumbers.length > 0) {
            setWinner(isActiveFirstPlayer ? 'Гравець 1' : 'Гравець 2');
            setIsActiveFirstPlayer(true);
        }
    }, [guessedNumbers]);

    function isGameOver() {
        return randomNumbers.every(num => guessedNumbers.includes(num));
    }
    return (
        <div className="game-box">
            <GameHeader {...{randomNumbers, setRandomNumbers, guessedNumbers, winner, setWinner}}/>
            <PlayersContainer
                guessedNumbers={guessedNumbers}
                isActiveFirstPlayer={isActiveFirstPlayer}
                makeMove={makeMove}
            />
        </div>
    );
}
