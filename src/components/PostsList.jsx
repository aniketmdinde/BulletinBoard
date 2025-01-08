import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { removePost, selectAllPosts, setPostToLocalStorage } from "../features/PostsSlice"
import AuthorCredit from "./AuthorCredit";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

function PostsList() {

    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch()

    useEffect(()=>{
        const temp = localStorage.getItem('posts')
        const locallyStoredPosts = JSON.parse(temp)
        if(locallyStoredPosts && locallyStoredPosts.length > 0)
          dispatch(setPostToLocalStorage(locallyStoredPosts))
    },[])
    
    useEffect(()=>{
        localStorage.setItem('posts', JSON.stringify(posts))
    },[posts])

    const handleDeletePost = (e) => {
        dispatch(removePost(e.target.id))
    }

    const renderPosts = posts.map((post) => (
        <div key={post.id} className="post w-1/2 bg-[#3D3D3D] shadow-lg border rounded-xl pt-1 pb-4 px-2 flex flex-col justify-center items-center hover:bg-[#578E7E] duration-200">
            <div className="time-and-delete flex justify-between items-center w-full text-[#F5ECD5]">
                <TimeAgo timestamp={post.date}/>
                <button onClick={handleDeletePost} className="mr-2 px-2 bg-[#FFFAEC] hover:bg-[#3D3D3D] rounded-full text-[#3D3D3D] hover:text-[#FFFAEC] duration-200" id={post.id}>X</button>

            </div>
            <h2 className="text-[#F5ECD5] text-center font-extrabold text-2xl text-wrap hover:text-[#3D3D3D] duration-200 cursor-pointer">{post.title}</h2>
            <p className="text-[#F5ECD5] text-center font-bold text-wrap py-1 px-4 w-3/4">
                {post.content.length > 100 ? post.content.substring(0,80) + "..." : post.content}
            </p>
            <div className="post-bottom flex justify-between w-5/6">
                <ReactionButtons post={post} classname="w-3/5 text-[#F5ECD5] font-thin"/>
                <AuthorCredit userId={post.userId || ''} className="text-right w-2/5 text-[#F5ECD5] font-thin"/>
            </div>
        </div>
    ))

    return (
        <div className="flex flex-col justify-center items-center space-y-2 m-2">
            {renderPosts}
        </div>
    )
}

export default PostsList