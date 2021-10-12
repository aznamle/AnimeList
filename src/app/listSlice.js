import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "watchList",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { add } = listSlice.actions

export default listSlice.reducer