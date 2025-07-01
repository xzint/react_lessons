export default function LikeItem({likes, dislikes, onLike, onDislike}) {
    return (
        <>
            <button className="like-button" onClick={() => onLike()}>
                👍 {likes}
            </button>
            <button className="dislike-button" onClick={onDislike}>
                👎 {dislikes}
            </button>
        </>
    );
}
