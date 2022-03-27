import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getComments} from "pages/api/comment";
import {HTTP_STATUS} from "constant";
export const fetchComments = createAsyncThunk(
    'post/fetchComments',
    async (id) =>{
        const data = await getComments(id)
        return  {
            [id]: data,
        }
    }
)

const initialState = {
    comments: {},
    loading: null,
}
const commentSlice = createSlice({
    name: 'comment',
    initialState,

    extraReducers: {
        [fetchComments.pending](state){
            state.loading = HTTP_STATUS.PENDING
        },
        [fetchComments.fulfilled](state, { payload }) {
            state.loading = HTTP_STATUS.FULFILLED
            state.comments =  { ...state.comments, ...payload }
        },
        [fetchComments.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED;
        },

    }
});


export default commentSlice.reducer;
