import { configureStore } from '@reduxjs/toolkit';

import headerSlice from './slice/header';

export default configureStore({
    reducer: {
        header: headerSlice,
    },
});
