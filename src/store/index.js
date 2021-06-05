import { configureStore } from "@reduxjs/toolkit";
import testReducer from './test/testSlice';

export default configureStore({
    reducer: {
        test: testReducer,
    },
});