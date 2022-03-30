import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CreateUser} from "../../../pages/api/user";
import {HTTP_STATUS} from "../../../constant";
import {fetchPost} from "../post";

const NAMESPACE = "user";

export const createUser = createAsyncThunk(
    `${NAMESPACE}/createUser`,
    async (input) =>{
        const  data  = await CreateUser(input)
        return data.CreateUser;
    }
)



const initialState = {
    name: null,
    logged: null,
    id: null,
    loading: null
}
const userSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        setSession:(state, { payload }) =>{
            state.name = payload
            state.logged = true
            state.loading = null
        },
    },
    extraReducers: {
        [createUser.pending](state){
            state.loading = HTTP_STATUS.PENDING
        },
        [createUser.fulfilled](state, { payload }) {
            state.loading = HTTP_STATUS.FULFILLED
            state.id = payload
        },
        [createUser.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED;
        },
    }
});

export const { setSession } = userSlice.actions;

export default userSlice.reducer;


