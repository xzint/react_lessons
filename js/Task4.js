const Task4 = () => {
    const FEE = 0.03;
    const USD = 41.15;
    const EURO = 47.17;


    const [amount, setAmount] = React.useState(0);
    const [error, setError] = React.useState(0);
    const [result, setResult] = React.useState({
        UAH: 0,
        USD: 0,
        EUR: 0,
        fee: 0,
    });

    const createTransaction = type => {
        setError(null);

        const tempFee = amount * FEE;
        const operations = {
            'add': 1,
            'minus': -1
        };

        const op = operations[type];
        const res = result.UAH + op * amount - tempFee;
        if (res < 0) {
            setError('Неможлива транзакція');
            return;
        }
        setResult({
            UAH: res,
            USD: (res / USD).toFixed(2),
            EUR: (res / EURO).toFixed(2),
            fee: amount * FEE
        })
    }

    return (
        <section id="task_4">
            <h1>Task4</h1>
            <h3>Сума на рахунку: {result.UAH.toFixed(2)} грн</h3>
            <h3>Сума на рахунку в долларах: {result.USD}</h3>
            <h3>Сума на рахунку в євро: {result.EUR}</h3>
            <label htmlFor="add_value">
                Введіть суму:
            </label>
            <input
                type="number"
                id="add_value"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) =>
                    setAmount(parseInt(e.target.value) || 0)
                }
            />
            <button onClick={() => createTransaction('add')}>Поповнити</button>
            <button onClick={() => createTransaction('minus')}>Зняти</button>
            <div>
                {
                    (error) ? <h2 style={{color: 'red'}}>Не можливо виконати транзакцію</h2> :
                        <div>
                            <h3>Коміссія: {result.fee}</h3>
                        </div>
                }
            </div>
        </section>
    )
}
