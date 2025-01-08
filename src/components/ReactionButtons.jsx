import { useDispatch } from "react-redux"
import { addReaction } from "../features/PostsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    heart: '❤️',
    rocket: '🚀',
}

function ReactionButtons({post, classname =""}) {
    const dispatch = useDispatch();

    const renderReactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <div key={name}>
            <button
                type="button"
                value={name}
                onClick={() => {dispatch(addReaction({postId: post.id, reaction: name}))}}
                className="bg-[#FFFAEC] hover:bg-[#3D3D3D] rounded-full mr-1 p-0.5 duration-200"
            >
                {emoji}
            </button>
            <span>
                {post.reactions[name]}
            </span>
        </div>
    ))

    return (
        <div className={`flex justify-start items-center gap-3 ${classname}`}>
            {renderReactionButtons}
        </div>
    )
}

export default ReactionButtons
