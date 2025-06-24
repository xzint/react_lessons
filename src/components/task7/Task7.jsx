import {useEffect, useState} from "react";
import styles from './task7.module.css';
import {EmployersList} from "./constants.js";

export default function Task7() {
    const [name, setName] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(prev => {
            if (!name) {
                return [];
            }
            return EmployersList.filter(item => {
                return item.name.toLowerCase().includes(name.toLowerCase());
            })
                .map(item => {
                    return {
                        id: item.id,
                        name: item.name
                            .replace(new RegExp(name, 'gi'), (match) =>
                                `<span class="${styles.highlight}">${match}</span>`
                            )
                    }
                })
        })
    }, [name]);
    return (
        <section id="task7">
            <h2>Task7</h2>
            <div>
                <label htmlFor={name}>Ім'я</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3>Список імен</h3>
                    <ul>
                        {EmployersList.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Фільтрований список імен</h3>
                    <ul>
                        {filteredList.map((item) => (
                            <li key={item.id} dangerouslySetInnerHTML={{ __html: item.name }} ></li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
