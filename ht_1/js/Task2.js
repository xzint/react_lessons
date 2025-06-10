const Task2 = () => {
    const data = [
        {
            months: [1, 2, 12],
            title: 'Зима',
            clothes: 'Шуба',
            img: './images/winter.jpg'
        },
        {
            months: [3, 4, 5],
            title: 'Весна',
            clothes: 'Куртка',
            img: './images/spring.jpg'
        },
        {
            months: [6, 7, 8],
            title: 'Літо',
            clothes: 'Шорти',
            img: './images/summer.jpg'
        },
        {
            months: [9, 10, 11],
            title: 'Осінь',
            clothes: 'Пальто',
            img: './images/fall.jpg'
        },
    ];

    const getResult = () => {
        if (!month || month < 0 || month > 12) {
            return null;
        }
        return data.find(obj => obj.months.find(m => m === month));
    }

    const [month, setMonth] = React.useState(1);

    return (
        <section id="task_2">
            <h1>Task2</h1>
            <label htmlFor="month">
                Введіть номер місяця:
            </label>
            <input
                type="number"
                id="month"
                value={month}
                onChange={(e) =>
                    setMonth(parseInt(e.target.value) || 0)
                }
            />
            {
                (!getResult())
                    ? (<h2 style={{color: 'red'}}>Введіть правильний номер місяця: 1-12</h2>)
                    : (<div>
                        <h2>Місяць: {month}</h2>
                        <h2>Пора року: {getResult().title}</h2>
                        <h3>Одяг: {getResult().clothes}</h3>
                        <img style={{width: '200px'}} src={getResult().img} alt={getResult().title}/>
                    </div>)
            }
        </section>
    )
}
