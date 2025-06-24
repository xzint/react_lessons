import './App.css'
import Task1 from "./components/task1/Task1.jsx";
import Task2 from "./components/task2/Taks2.jsx";
import Minesweeper from "./components/minesweeper/Minesweeper.jsx";
import Task7 from "./components/task7/Task7.jsx";
import TicTacToe from "./components/tic-tac-toe/TicTacToe.jsx";

function App() {

  return (
    <>
        <TicTacToe/>
        <Task1/>
        <Task2/>
        <Minesweeper/>
        <Task7/>
    </>
  )
}

export default App
