import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./reducers";
import getDataSlice from "./fetchDataReducer"

const store = configureStore({
    reducer: {
        commonReducer,
        getDataSlice,
    }
})

export default store;