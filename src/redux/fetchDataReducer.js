import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Fatch data from api using Thunk
const getData = createAsyncThunk('api/data', () => {
    return axios.get('https://restcountries.com/v2/all?fields=name,region,flag', {
        params: {
            _limit: 10
        }
    })
        .then((response) => {
            return response.data;
        })
});

const getDataSlice = createSlice({
    name: 'getData',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.loading = true
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [getData.rejected]: (state, action) => {
            state.loading = false
            state.error = 'Something went wrong, Please try after some time!'
        }
    }
});

export { getData }

export default getDataSlice.reducer;