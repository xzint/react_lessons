const Task5 = () => {
    const CREDENTIALS = [
        {
            login: 'user1',
            password: 'pass1'
        },
        {
            login: 'user2',
            password: 'pass2'
        },
        {
            login: 'user3',
            password: 'pass3'
        }
    ]

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [result, setResult] = React.useState(null);

    const checkCredentials = () => {
        setResult(null);
        const user = CREDENTIALS.find(cred => cred.login === login && cred.password === password);
        if (user) {
            setResult({
                login: user.login,
                message: `Вітаємо, ${user.login}!`
            });
        } else {
            setResult({
                login: '',
                message: 'Невірний логін або пароль'
            });
        }
    }
    return (
        <section id="task_5">
            <h1>Task5</h1>
            <label htmlFor="start_number">
                Логін:
            </label>
            <input
                type="text"
                id="login"
                value={login}
                onChange={(e) =>
                    setLogin(e.target.value || '')
                }
            />
            <label htmlFor="end_number">
                Введіть пароль:
            </label>
            <input
                type="text"
                id="password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value || '')
                }
            />
            <button onClick={checkCredentials}>Go</button>
            {
                !result ? <h2>Введіть логін та пароль</h2> :

                (!!result.login)
                    ? <h2 style={{color: 'green'}}>Вітаємо, {login}!</h2>
                    : <div>
                        <h2 style={{color: 'red'}}>Невірний логін або пароль</h2><span>Спробуйте user1, pass1</span>
                    </div>
            }
        </section>
    )
}
