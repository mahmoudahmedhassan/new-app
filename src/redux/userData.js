
import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'data',
    initialState: {
        userData:  localStorage.getItem("user_info")
        ? JSON.parse(localStorage.getItem("user_info"))
        :  {},
    },

    reducers: {
        userDataAction: (state, action) => {
            console.log('action.payload',action.payload)
             state.userData= action.payload;
             localStorage.setItem("user_info", JSON.stringify(state.userData));
        },
    }
});

export const {userDataAction} = userDataSlice.actions;
export default userDataSlice.reducer;