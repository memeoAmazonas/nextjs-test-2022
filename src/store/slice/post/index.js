import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CreatePost, getPost} from "pages/api/post";
import {HTTP_STATUS} from "constant";

const NAMESPACE = "post";

export const fetchPost = createAsyncThunk(
    `${NAMESPACE}/fetchPost`,
    async () =>{
        return await getPost()
    }
)
export const createPost = createAsyncThunk(
    `${NAMESPACE}/createPost`,
    async (input) =>{
         const data = await CreatePost(input)
        return data.CreatePost
    }
)

const initialState = {
    post: null,
    loading: null,
    loadingCreate: null,
    created: null
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

        [createPost.pending](state){
            state.loadingCreate = HTTP_STATUS.PENDING
        },
        [createPost.fulfilled](state, { payload }) {
            state.loadingCreate = HTTP_STATUS.FULFILLED
            state.created = payload
        },
        [createPost.rejected](state) {
            state.loadingCreate = HTTP_STATUS.REJECTED;
        },

    }
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;


