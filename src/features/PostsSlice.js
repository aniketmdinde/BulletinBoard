import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"
import {sub} from 'date-fns'

    const initialState = [
        // {
        //     id:'1',
        //     title: "Redux toolkit",
        //     content: "I'm lovin it!",
        //     date: sub(new Date(), {minutes: 20}).toISOString(),
        //     reactions: {
        //         thumbsUp: 0,
        //         heart: 0,
        //         rocket: 0
        //     }
        // },
        // {
        //     id:'2',
        //     title: "Pointers in C?",
        //     content: "I wanna die!",
        //     date: sub(new Date(), {minutes: 10}).toISOString(),
        //     reactions: {
        //         thumbsUp: 0,
        //         heart: 0,
        //         rocket: 0
        //     }
        // },
    ]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            heart: 0,
                            rocket: 0
                        }
                    }
                }
            }
        },
        removePost: (state, action) => {
            return state.filter(post => post.id !== action.payload)
        },
        addReaction: (state, action) => {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id == postId)
            if(existingPost)
                existingPost.reactions[reaction]++;
        },
        setPostToLocalStorage: (state, action) => {
            return action.payload;
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const {addPost, removePost, addReaction, setPostToLocalStorage} = postsSlice.actions;

export default postsSlice.reducer;