import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CreateUser, onLogin} from "pages/api/user";
import {HTTP_STATUS} from "constant";
import client from "pages/api/apollo-client";
const NAMESPACE = "user";

export const createUser = createAsyncThunk(
    `${NAMESPACE}/createUser`,
    async (input) => {
        const data = await CreateUser(input)
        return {id: data.CreateUser, ...input};
    }
)
export const login = createAsyncThunk(
    `${NAMESPACE}/login`,
    async (email) => {
        const data = await onLogin(email)
        return data.GetUserByEmail
    }
)


const initialState = {
    name: null,
    logged: null,
    id: null,
    loading: null,
    loginLoading: null,
    invalid: null,
}
const userSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        logout: () => { }
    },
    extraReducers: {
        [createUser.pending](state) {
            state.loading = HTTP_STATUS.PENDING
            state.id = null
        },
        [createUser.fulfilled](state, {payload}) {
            const { id, ...rest } = payload;
            if (id !== -1 && id !== -2) {
                state.loading = HTTP_STATUS.FULFILLED
                const { name } = rest;
                state.name = name;
                state.logged = true
            } else {
                state.loading = HTTP_STATUS.REJECTED
            }
            state.id = id
        },
        [createUser.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED;
        },

        [login.pending](state) {
            state.loginLoading = HTTP_STATUS.PENDING
            state.invalid = null
        },
        [login.fulfilled](state, {payload}) {
            if (payload && payload.id && payload.name) {
                state.loginLoading = HTTP_STATUS.FULFILLED
                state.id = payload.id
                state.name = payload.name
                state.invalid = null
            } else {
                state.invalid = true;
                state.loginLoading = null;
            }
        },
        [login.rejected](state) {
            state.loginLoading = HTTP_STATUS.REJECTED;
        },
    }
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;


