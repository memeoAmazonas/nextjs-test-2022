import { configureStore } from '@reduxjs/toolkit';
import comemntSlice  from  './slice/comment'
import headerSlice from './slice/header';
import postSlice from  './slice/post';
import userSlice from './slice/user';
export default configureStore({
    reducer: {
        header: headerSlice,
        post: postSlice,
        comment: comemntSlice,
        user: userSlice,
    },
});
