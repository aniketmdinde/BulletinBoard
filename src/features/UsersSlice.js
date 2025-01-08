import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "Aniket Dinde"},
    { id: 2, name: "John Doe"},
    { id: 3, name: "Pratik Patil"},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
})

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;