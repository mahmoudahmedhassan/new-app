
import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'data',
    initialState: {
        userData: {}
    },

    reducers: {
        userDataAction: (state, action) => {
            console.log('action.payload',action.payload)
             state.userData= action.payload;
        },
    }
});

export const {userDataAction} = userDataSlice.actions;
export default userDataSlice.reducer;