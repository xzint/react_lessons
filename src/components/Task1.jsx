import {useState} from "react";
import styles from './task1.module.css';

function Task1() {
    const FORM_STATE = {
        login: 'test',
        password: '12345',
    }
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(<></>);

    const checkPassword = () => {
        let content;

        if (login === FORM_STATE.login && password === FORM_STATE.password) {
            content = <p className={styles.green}>Login successful</p>;
        } else {
            content = <p className={`${styles.red} ` + ' ' + (login === 'Ivan' ? styles.blue : '')}>Login failed</p>;
        }
        setLoginState(content);

        console.log(content);
    }

    return (
        <section className={styles.task1}>
            <h1>Task1</h1>
            <p>Try to use: (login: test), (password: 12345) or login - Ivan</p>
            <input type="text" placeholder="Enter login here" onChange={e => setLogin(e.target.value.toString())}/>
            <input type="password" onChange={e => setPassword(e.target.value.toString())}/>
            <button onClick={checkPassword}>Confirm</button>
            <div>{ loginState }</div>
        </section>
    );
}

export default Task1;
