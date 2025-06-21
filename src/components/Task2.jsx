import {useEffect, useState} from "react";

function Task2() {
    const TICKET_TYPES = [
        {
            value: 'business',
            label: 'Бізнес клас',
        },
        {
            value: 'economy',
            label: 'Економ клас',
        },
    ];
    const INFO = {
        business: {
            items: [
                {
                    value: 'newspaper',
                    label: 'Газета',
                },
                {
                    value: 'brandy',
                    label: 'Коньяк',
                },
            ],
            image: 'https://www.avianews.com/wp-content/uploads/2023/05/139_flydubai_business_suite3-696x464.jpg'
        },
        economy: {
            items: [
                {
                    value: 'beer',
                    label: 'Пиво',
                },
                {
                    value: 'cheeps',
                    label: 'Чіпси',
                },
            ],
            image: 'https://i.pinimg.com/736x/02/b7/01/02b7016a79390638caeec8f95741e2b8.jpg'
        },
    }
    const [ticketType, setTicketType] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState(null);
    const [hasFood, setHasFood] = useState(null);

    useEffect(() => {
        setAdditionalInfo(null);
        setHasFood(null);
    }, [ticketType]);

    const brandyContent = <div>
        Закуски?<br/>
        <label onChange={event => setHasFood(event.target.value)}><input type="radio" value="yes"
                                                                         name="food"/>так</label><br/>
        <label onChange={event => setHasFood(event.target.value)}><input type="radio" value="no" name="food"/>ні</label>
    </div>;

    const ticketLabel = TICKET_TYPES[ticketType] ? (TICKET_TYPES[ticketType].label + 'квиток') : '';
    return (
        <section
            className='task2'
            style={
                {
                    backgroundImage: `url(${INFO[ticketType]?.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '20px',
                    color: `${ticketType === 'business' ? 'white' : 'black'}`,
                }
            }
        >
            <h1>Task2</h1>
            {
                ticketType && (
                    <div>
                        <p>Ви обрали {ticketLabel} квиток</p>
                        <p>Додатково {INFO[ticketType].value?.find(el => el.value === additionalInfo)?.label}</p>
                        {hasFood === 'yes' && 'Плюс закуски'}
                    </div>
                )
            }
            <select onChange={(event) => setTicketType(event.target.value)}>
                <option value={null}>Оберіть тип квитка</option>
                {
                    TICKET_TYPES.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))
                }
            </select>
            {
                (ticketType && INFO[ticketType]) && (
                    <>
                        <br/>
                        <span>Оберіть додаткову послугу</span>
                        <select onChange={(event) => setAdditionalInfo(event.target.value)}>
                            <option value={null}>Оберіть додаткову послугу</option>
                            {
                                INFO[ticketType].items.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))
                            }
                        </select>
                        {
                            (additionalInfo === 'brandy') && (brandyContent)
                        }
                    </>
                )
            }
        </section>
    )
}

export default Task2;
