import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify';
// import axios from 'axios';

const URL = "https://tstauth.smartgate-egypt.com/Auth/register";

// fetching
export const insertUserData = createAsyncThunk("user/insertUserData",
  async (values, thunkAPI) => {
    console.log(values);
    const { rejectWithValue, getState } = thunkAPI;
    try {
 
       await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values),
        mode: 'cors'

      })
      // console.log(res)
      // const data = await res.json();
      //  return data
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)

const initialState = {
  users:{},
  loading: null,
  error: null
}

export const userRegisterSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {

    [insertUserData.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },

    [insertUserData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
      state.loading = false;
    },
    [insertUserData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }

})

export default userRegisterSlice.reducer;






