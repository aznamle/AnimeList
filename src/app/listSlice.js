import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "watchList",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.initialState = [action.payload, ...state.initialState]
        }
    }

})

export const { add } = listSlice.actions

export default listSlice.reducer