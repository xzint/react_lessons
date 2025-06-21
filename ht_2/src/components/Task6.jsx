import {useState} from "react";
import styles from './Task6.module.css';
import DishesLColumn from "./DishesLColumn.jsx";

const initialWaitingList = [
    'Голубці',
    'Грибний суп'
]
const initialProcessingList = [
    'Млинці з м’ясом',
    'Салат з тунцем',
]
const initialCompletedList = [
    'Борщ',
    'Плов',
]
export default function Task6() {
    const [newDish, setNewDish] = useState('');
    const [waitingList, setWaitingList] = useState(() => initialWaitingList);
    const [processingList, setProcessingList] = useState(initialProcessingList);
    const [completedList, setCompletedList] = useState(initialCompletedList);

    const addDish = () => {
        if (newDish.trim() === '') {
            alert('Введіть назву страви');
            return;
        }
        setWaitingList([...waitingList, newDish]);
        setNewDish('');
    }
    const catchClick = (dishObj, currentCallback, nextCallback) => {
       currentCallback(prevList => {
           return prevList.filter((_, index) => index !== dishObj.index);
       });
       if (!nextCallback) return;
       nextCallback(prevList => {
           return [...prevList, dishObj.dish];
       })
    }
    return (
        <section className='task6'>
            <h1>Task6</h1>
            <div className={styles.header}>
                <label>Додати страву:
                    <input
                        type="text"
                        value={newDish}
                        onChange={e => setNewDish(e.target.value)}
                    />
                </label>
                <button onClick={addDish}>Додати</button>
            </div>
            <div className={styles.main}>
                <div className={styles.content}>
                    <DishesLColumn
                        title={'Очікують на виконання'}
                        dishes={waitingList}
                        btnText='Готувати'
                        onDishClick={e => catchClick(e, setWaitingList, setProcessingList)}/>
                    <DishesLColumn
                        title={'Виконуються'}
                        dishes={processingList}
                        btnText='Виконати'
                        onDishClick={e => catchClick(e, setProcessingList, setCompletedList)}/>
                    <DishesLColumn
                        title={'Готові до виносу'}
                        dishes={completedList}
                        btnText='Подати'
                        onDishClick={e => catchClick(e, setCompletedList, null )}/>
                </div>
            </div>
        </section>
    );
}
