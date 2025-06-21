import {useEffect, useState} from "react";
import styles from './task3.module.css';

const items = [
    {
        id: 1,
        word: 'pig',
        image: 'pig.png',
        translation: 'свиня',
    },
    {
        id: 2,
        word: 'apple',
        image: 'apple.png',
        translation: 'яблуко',
    },
    {
        id: 3,
        word: 'cat',
        image: 'cat.jpg',
        translation: 'кіт',
    },
    {
        id: 4,
        word: 'dog',
        image: 'dog.jpg',
        translation: 'собака',
    }, {
        id: 5,
        word: 'table',
        image: 'table.jpg',
        translation: 'стіл',
    },
    {
        id: 6,
        word: 'sun',
        image: 'sun.jpg',
        translation: 'сонце',
    },

]
export default function Task3() {
    const [currentItem, setCurrentItem] = useState(null);
    const [currentWord, setCurrentWord] = useState('');
    const [guessedState, setGuessedState] = useState('none');

    const generateRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setCurrentItem(items[randomIndex]);
    }

    useEffect(() => {
        generateRandomItem();
    }, []);

    const checkWord = () => {
        if (!currentItem) return;
        if (currentWord.trim().toLowerCase() === currentItem.translation.toLowerCase()) {
            setGuessedState('correct');
            generateRandomItem();
        } else {
            setGuessedState('incorrect');
        }
        setTimeout(() => {
            setCurrentWord('');
            setGuessedState('none');
        }, 3000);
    }

    return (
        <section className='task3'>
            <h1>Task3</h1>
            <div className={`${styles.content} ${styles[guessedState]}`}>
                <img src={`./${currentItem?.image}`} alt={currentItem?.word} className={styles.image}/>
                <p>{currentItem?.word}</p>
                <p>Ваш переклад:</p>
                <div>
                    <input type="text" onChange={e => setCurrentWord(e.target.value)}/>
                    <button onClick={checkWord}>Перевірити</button>
                </div>
                <div hidden={guessedState === 'none'}>
                    {guessedState === 'correct' && <p className={styles.correct}>Вірно!</p>}
                    {guessedState === 'incorrect' && <p className={styles.incorrect}>Невірно, спробуйте ще!</p>}
                </div>
            </div>
        </section>
    );
}
