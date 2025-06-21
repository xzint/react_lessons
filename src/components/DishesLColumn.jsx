import DishItem from "./DishItem.jsx";

export default function DishesLColumn({ dishes, title, onDishClick, btnText = 'Виконати' }) {
    return (
        <div className="listColumn">
            <h2>{title}</h2>
            {dishes.length > 0 ? (
                <ul>
                    {dishes.map((dish, index) => (
                        <DishItem key={index} dish={dish} onClick={() => onDishClick({index, dish})} btnText={btnText}/>
                    ))}
                </ul>
            ) : (
                <p>Очікування порожнє</p>
            )}
        </div>
    )
}
