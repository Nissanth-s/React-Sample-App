import {createSlice} from '@reduxjs/toolkit'

const commonReducer = createSlice({
    name: 'filter',
    initialState: 'All',
    reducers: {
        changeFilter: (state, action) => {
            return action.payload
        }
    }
})

export const {changeFilter} = commonReducer.actions;
export default commonReducer.reducer;