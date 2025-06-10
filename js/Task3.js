const Task3 = () => {
    const [startValue, setStartValue] = React.useState(0);
    const [endValue, setEndValue] = React.useState(5);
    const [result, setResult] = React.useState({
        isError: '',
        data: 0
    });

    const generateNumber = () => {
        if (endValue <= startValue) {
            setResult({
                isError: 'Введіть правильні дані, друге число має бути більшим за перше',
                data: null
            });
            return;
        }

        setResult({
            isError: '',
            data: (Math.floor(Math.random() * (endValue - startValue + 1)) + startValue)
        })
    }
    return (
        <section id="task_3">
            <h1>Task3</h1>
            <label htmlFor="start_number">
                Введіть початок діапазону:
            </label>
            <input
                type="number"
                id="start_number"
                value={startValue}
                onChange={(e) =>
                    setStartValue(parseInt(e.target.value) || 0)
                }
            />
            <label htmlFor="end_number">
                Введіть початок діапазону:
            </label>
            <input
                type="number"
                id="end_number"
                value={endValue}
                onChange={(e) =>
                    setEndValue(parseInt(e.target.value) || 0)
                }
            />
            <button onClick={generateNumber}>Згенерувати</button>
            <div>
                {
                    (result.isError) ? (<h2 style={{color: 'red'}}>{result.isError}</h2>)
                        : (<h2>Випадкове число: {result.data}</h2>)
                }
            </div>
        </section>
    )
}
