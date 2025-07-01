import MessagesList from "./MessagesList.jsx";
import {useEffect, useRef, useState} from "react";
import {MESSAGES} from "./constants.ts";

export default function Chat() {
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('Jake');
    const [user, setUser] = useState('Jake');
    const [messages, setMessages] = useState(() => MESSAGES);
    const chatRef = useRef(null);

    function addMessage() {
        if (message.trim() === '') {
            return;
        }
        const newMessage = {
            id: 0,
            text: message,
            author: user,
            date: new Date().toLocaleString(),
            likes: 3,
            dislikes: 0
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');
    }

    useEffect(() => {
        console.log(chatRef.current)
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    function updateUser() {
        setUser(userName)
        setUserName('');
    }

    return (
        <div className={"chat-container"}>
            <div>
                <input type="text"
                       value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={updateUser}>Get user chat state</button>
            </div>
            <MessagesList chatRef={chatRef} outerMessages={messages} setOuterMessages={m => setMessages(m)} userName={user}/>
            <div className={"chat-input"}>
                <input type="text"
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}






































