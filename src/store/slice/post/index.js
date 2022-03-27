import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPost} from "pages/api/post";
import {HTTP_STATUS} from "constant";
export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async () =>{
        return await getPost()
    }
)

const initialState = {
    post: null,
    loading: null,
}
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost:(state, action) =>{
            state.post = action.payload
        },
    },
    extraReducers: {
        [fetchPost.pending](state){
            state.loading = HTTP_STATUS.PENDING
        },
        [fetchPost.fulfilled](state, { payload }) {
            state.loading = HTTP_STATUS.FULFILLED
            state.post = payload
        },
        [fetchPost.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED;
        },

    }
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;


