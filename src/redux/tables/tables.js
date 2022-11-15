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
            // localStorage.setItem("table",JSON.stringify(data));

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const tablesSlice = createSlice({
    name: 'tables',
    initialState: {
        tables: 
        // localStorage.getItem("table")
        // ? JSON.parse(localStorage.getItem("table")):
         [],
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
                // localStorage.setItem("table", JSON.stringify(state.table));

            },
            [fetchTables.rejected]: (state, action) => {
                state.error = action.payload;
                state.loading = false;
            },
        },
    })
export default tablesSlice.reducer;
