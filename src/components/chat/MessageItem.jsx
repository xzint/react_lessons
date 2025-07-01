import LikeItem from "./LikeItem.jsx";
import styles from "./message-item.module.css";
import DateItem from "./DateItem.jsx";

export default function MessageItem({user, text, author, date, likes, dislikes, onLike, onDislike}) {
    const type = author === user ? 'current-message' : 'other-message';
    return (
        <div className={styles[type] + ' ' + styles.messageItem}>
            <div className={styles.messageContent}>
                <div className={styles.messageRow}>
                    <p>{text}</p>
                </div>
                <div className={styles.messageRow}>
                    <span className={styles.author}>{author}: </span>
                    <DateItem date={date}/>
                    <LikeItem
                        likes={likes}
                        dislikes={dislikes}
                        onLike={onLike}
                        onDislike={onDislike}
                    />
                </div>
            </div>
        </div>
    );
}
