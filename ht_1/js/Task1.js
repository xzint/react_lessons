const Task1 = () => {
    const BUS_PER_PASSENGER = 20;
    const BOTTLE_PER_PASSENGER = 2;
    const SANDWICH_PER_PASSENGER = 3;

    const setInitialValue = () => {
       return {
           busCount: 0,
           bottleCount: 0,
           sandwichCount: 0
       }
    }

    const [passengersCount, setPassengersCount] = React.useState(11);
    const [result, setResult] = React.useState(setInitialValue)

    const calculateBusCount = passengers => {
        return Math.ceil(passengers / BUS_PER_PASSENGER);
    }

    const calculateBottleCount = passengers => {
        return Math.ceil(passengers * BOTTLE_PER_PASSENGER);
    }

    const calculateSandwichCount = passengers => {
        return Math.ceil(passengers * SANDWICH_PER_PASSENGER);
    }

    const calculatePassengersCount = (value) => {
        setPassengersCount(value || 0);
        console.log(value);
        if (!value) {
            setResult(setInitialValue());
        }
        setResult( {
            busCount: calculateBusCount(value),
            bottleCount: calculateBottleCount(value),
            sandwichCount: calculateSandwichCount(value),
        })
    }
    return (
        <section id="task_1">
            <h1>Task1</h1>
            <label htmlFor="passengers">
                Введіть кількість пасажирів:
            </label>
            <input
                type="text"
                id="passengers"
                value={passengersCount}
                onChange={(e) =>
                    calculatePassengersCount(parseInt(e.target.value) || 0)
                }
            />
            {
                !!result.busCount && (
                    <div className='result'>
                        <h2>Пасажирів: {passengersCount}</h2>
                        <h2>Треба автобусів: {result.busCount}</h2>
                        <h2>Води: {result.bottleCount}</h2>
                        <h2>Бутербродів: {result.sandwichCount}</h2>
                    </div>
                )
            }
        </section>
    )
};
