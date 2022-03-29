import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: null,
    logged: null,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSession:(state, { payload }) =>{
            state.name = payload
            state.logged = true
        },
    },
});

export const { setSession } = userSlice.actions;

export default userSlice.reducer;


