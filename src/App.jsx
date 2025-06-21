import './App.css'
import Task1 from "./components/Task1.jsx";
import Task2 from "./components/Task2.jsx";
import styles from './App.module.css';
import {Task4} from "./components/Task4.jsx";
import Task5 from "./components/Task5.jsx";
import Task6 from "./components/Task6.jsx";
import Task3 from "./components/Task3.jsx";

function App() {
    return (
        <div className={styles.main}>
            <Task1/>
            <Task2/>
            <Task3/>
            <Task4/>
            <Task5/>
            <Task6/>
        </div>
    )
}

export default App
