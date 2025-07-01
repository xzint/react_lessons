export default function DateItem({date}) {
    const formattedDate = new Date(date).toLocaleTimeString('en-US');
    return (
        <p>
            {formattedDate}
        </p>
    )
}
