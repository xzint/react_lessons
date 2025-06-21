export default function DishItem({ dish, onClick, btnText }) {
    return (
        <li className="dishItem">
            <span>{dish}</span>
            <button onClick={onClick}>{btnText}</button>
        </li>
    );
}
