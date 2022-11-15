import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
let URL = " https://tstauth.smartgate-egypt.com/th/pg2/";

export const fetchTables = createAsyncThunk(
    'tables/fetchTables',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`https://tstauth.smartgate-egypt.com/th/pg2/${id}`, {
                headers: {
                    DataType: "JSON",
                    Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("access-token")),
                    mode: 'cors',
                    Accept: 'application/json',
                },
            });
            const data = await res.json();
            if(data)
             localStorage.setItem("tables",JSON.stringify(data));

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const tablesSlice = createSlice({
    name: 'tables',
    initialState: {
        tables: localStorage.getItem("tables") ? JSON.parse(localStorage.getItem("tables")) : [],
            loading: false,
            error: null
    },
        extraReducers: {
            //fetch
            [fetchTables.pending]: (state,) => {
                state.loading = true;
                state.error = null;
            },
            [fetchTables.fulfilled]: (state, action) => {
                state.tables = action.payload;
                state.loading = false;
 
            },
            [fetchTables.rejected]: (state, action) => {
                state.error = action.payload;
                state.loading = false;
            },
        },
    })
export default tablesSlice.reducer;
