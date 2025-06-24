import {useState} from "react";
import styles from './task2.module.css';

export default function Task2() {
    const [temperature, setTemperature] = useState(10);

    const displayTemperature = Math.floor(temperature / 2.5 - 10);

    const getClass = () => {
        if (displayTemperature < 0) {
            return 'white';
        }
        if (displayTemperature <= 10) {
            return 'blue';
        }
        if (displayTemperature <= 22) {
            return 'green';
        }
        return 'red';
    }

    return (
        <section id="task2" className={styles[getClass()]}>
            <h2>Task2</h2>
            <label htmlFor="temperature">Введіть температуру:</label>
            <input
                type="range"
                id="temperature"
                name="temperature"
                value={temperature}
                onChange={(e) => setTemperature(+e.target.value)}
            />
            <div>Значення: {displayTemperature}</div>
            <div>Значення: {temperature}</div>
        </section>
    )
}
