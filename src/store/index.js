import {configureStore, combineReducers} from '@reduxjs/toolkit';
import comemntSlice from './slice/comment'
import headerSlice from './slice/header';
import postSlice from './slice/post';
import userSlice from './slice/user';
import client from "../pages/api/apollo-client";


const combineReducer = combineReducers({
    header: headerSlice,
    post: postSlice,
    comment: comemntSlice,
    user: userSlice,
});
const rootReducer = (state, action) => {
    if (action.type === 'user/logout') {
        state = {};
        client.cache.gc();
    }
    console.log("state out", state);
    return combineReducer(state, action);
};
export default configureStore({
    reducer: rootReducer,
});

