import { useState } from "react";
import { useDispatch } from "react-redux"
import { addPost } from "../features/PostsSlice";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/UsersSlice";

function AddPost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const canSubmit = Boolean(title) && Boolean(content) && Boolean(userId)

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addPost(title, content, userId))
        setTitle('')
        setContent('')
        setUserId('')
    }

    
    const renderOptions = users.map((user) => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))

    return (
        <div className="flex justify-center items-center">
            <form className="bg-[#F5ECD5] w-1/2 flex flex-col justify-center items-center gap-y-4 py-4 rounded-lg">
                <h1 className="text-[#3D3D3D] text-3xl font-bold">Add Post</h1>
                <div className="title w-2/3">
                    <label htmlFor="postTitle" className="text-[#3D3D3D] font-bold block text-left">Title</label>
                    <input 
                        type="text"
                        id="postTitle"
                        value={title}
                        className="w-full rounded-md px-2 h-8"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="content w-2/3">
                    <label htmlFor="postContent" className="text-[#3D3D3D] font-bold block text-left">Content</label>
                    <textarea
                        id="postContent"
                        value={content}
                        className="w-full rounded-md px-2 min-h-10"
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="author w-2/3">
                    <label htmlFor="postAuthor" className="text-[#3D3D3D] font-bold block text-left">Author</label>
                    <select 
                        name="author" 
                        id="postAuthor"
                        value={userId}
                        className="w-full rounded-md px-2 h-8"
                        onChange={(e) => setUserId(e.target.value)}
                    >
                        <option></option>
                        {renderOptions}
                    </select>
                </div>
                <button 
                    className="bg-[#578E7E] text-white py-2 px-4 rounded-md disabled:bg-[#3D3D3D] disabled:text-white duration-200" 
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddPost
