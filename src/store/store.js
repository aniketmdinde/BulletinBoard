import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/PostsSlice'
import usersReducer from '../features/UsersSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})