import MessageItem from "./MessageItem.jsx";
import styles from "./messages-list.module.css"

export default function MessagesList({chatRef, outerMessages, setOuterMessages, userName}) {
    function updateReactions(index, name, value) {
        if (!['likes', 'dislikes'].includes(name) || Number.isNaN(value)) {
            return;
        }
        const newMessages = [...outerMessages];
        newMessages[index][name] = value;
        setOuterMessages(newMessages);
    }

    return (
        <section ref={chatRef} className={styles.messageList}>
            {outerMessages.map((message, index) => (
                <MessageItem
                    key={index}
                    user={userName}
                    {...message}
                    onLike={() => updateReactions(index, 'likes', message.likes + 1)}
                    onDislike={() => updateReactions(index, 'dislikes', message.dislikes + 1)}
                />
            ))}
        </section>
    )
}
