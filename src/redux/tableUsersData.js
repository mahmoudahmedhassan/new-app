
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchUsersTableData = createAsyncThunk(
  'tableUsersData/fetchUsersTableData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('https://tstauth.smartgate-egypt.com/Th/PG1Pages', {
        headers: {
          DataType: "JSON",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("access-token")),
          mode: 'cors',
          Accept: 'application/json',
        },
      });
       const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const tapleDataSlice = createSlice({
  name: 'tableUsersData',
  initialState: { tableUsersData: [], loading: false, error: null },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchUsersTableData.pending]: (state,) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsersTableData.fulfilled]: (state, action) => {
      state.tableUsersData = action.payload;
      state.loading = false;
    },
    [fetchUsersTableData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default tapleDataSlice.reducer;

