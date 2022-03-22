import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: 'home',
}
const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setActive:(state, action) =>{
            state.active = action.payload
        },
    },
});

export const { setActive } = headerSlice.actions;

export default headerSlice.reducer;
