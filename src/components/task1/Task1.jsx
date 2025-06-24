import {useState} from "react";

export default function Task1() {
    const [length, setLenght] = useState(0);

    const metersLength = isNaN(length) ? (length / 100).toFixed(2) : 0;
    const kiloMetersLength = isNaN(length) ? (length / 1000).toFixed(2) : 0;

    return (
        <section id="task1">
            <h2>Task1</h2>
            <label>
                Введіть довжину в сантиметрах:&nbsp;
                <input
                    type="number"
                    value={length}
                    min="0"
                    onChange={(e) => setLenght(parseInt(e.target.value))}
                />
            </label>
            <div>Довжина в метрах: {metersLength}</div>
            <div>Довжина в кілометрах: {kiloMetersLength}</div>
        </section>
    )
}
