import {useState} from "react";

export default function Player({player, makeMove, guessedNumbers}) {
    const [num, setNum] = useState('');
    function playerMove() {
        if (isNaN(num) || +num < 0 || +num > 9 || !canMakeMove) {
            alert("Введіть число від 0 до 9");
            return;
        }

        if (guessedNumbers.includes(num)) {
            alert("Це число вже вгадано");
            return;
        }

        makeMove({
            playerName: player.name,
            guessedNumber: +num
        });
        setNum('');
    }
    const canMakeMove = player.isActive;
    return (
        <div className={`player ${player.isActive ? 'active' : ''}`}>
            <h3>{player.name}</h3>
            <div>
                Цифра:&nbsp;
                <input
                    type="text"
                    disabled={!canMakeMove}
                    value={num}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || /^[0-9]$/.test(value)) {
                            setNum(value);
                        }
                    }}
                />
                <button disabled={!canMakeMove} onClick={playerMove}>Зробити хід</button>
            </div>
        </div>
    )
}
