import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {user: {}},
    reducers: {
        currentUser: (state, action) =>{
            const user = action.payload;
            state.user = user;
        }
    }
})

export const {currentUser} = authSlice.actions;
export default authSlice.reducer