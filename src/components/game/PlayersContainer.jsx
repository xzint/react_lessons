import Player from "./Player.jsx";

export default function PlayersContainer({guessedNumbers, isActiveFirstPlayer, makeMove}) {
    return (
        <div className="players-container">
           <Player player={{name: 'Гравець 1', isActive: isActiveFirstPlayer}} guessedNumbers={guessedNumbers} makeMove={makeMove}/>
           <Player player={{name: 'Гравець 2', isActive: !isActiveFirstPlayer}} guessedNumbers={guessedNumbers} makeMove={makeMove}/>
        </div>
    );
}
