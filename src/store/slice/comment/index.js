import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getComments, SendComment} from "pages/api/comment";
import {HTTP_STATUS} from "constant";

const NAMESPACE = 'comment';
export const fetchComments = createAsyncThunk(
    `${NAMESPACE}/fetchComments`,
    async (id) => {
        const data = await getComments(id)
        return {
            [id]: data,
        }
    }
)
export const createComment = createAsyncThunk(
    `${NAMESPACE}/createComment`,
    async (input) => {
        await SendComment(input)
        return null
    }
)

const initialState = {
    comments: {},
    loading: null,
    create: null,
}
const commentSlice = createSlice({
    name: NAMESPACE,
    initialState,

    extraReducers: {
        [fetchComments.pending](state) {
            state.loading = HTTP_STATUS.PENDING
        },
        [fetchComments.fulfilled](state, { payload }) {
            state.loading = HTTP_STATUS.FULFILLED
            console.log({ ...state.comments, ...payload })
            state.comments =  { ...state.comments, ...payload }
        },
        [fetchComments.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED;
        },

        [createComment.pending](state) {

            state.create = HTTP_STATUS.PENDING


        },
        [createComment.fulfilled](state) {
            state.create = HTTP_STATUS.FULFILLED
        },
        [createComment.rejected](state) {
            state.create = HTTP_STATUS.REJECTED;
        },
    },
    reducers: {
        setComment: (state, {payload}) => {
            console.log(state.comments)
            state.comments = {...state.comments, ...payload }
        }
    },
    });

export const { setComment } = commentSlice.actions;

export default commentSlice.reducer;
