import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 
export const fetchReports =createAsyncThunk(
    'reports/fetchRports',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://tstauth.smartgate-egypt.com/th/pg3/${id}`, {
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
 )
 
const reportsSlice =createSlice({
    name: 'reports',
    initialState: { reports: [], loading: false, error: null },
    extraReducers: {
        //fetch
        [fetchReports.pending]: (state,) => {
          state.loading = true;
          state.error = null;
        },
        [fetchReports.fulfilled]: (state, action) => {
          state.reports = action.payload;
          state.loading = false;
        },
        [fetchReports.rejected]: (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
      },
 })
export default reportsSlice.reducer;
