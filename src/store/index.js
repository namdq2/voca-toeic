import { configureStore } from "@reduxjs/toolkit";
import vocabularyReducer from './vocabulary/vocabularySlice';

export default configureStore({
    reducer: {
        vocabulary: vocabularyReducer,
    },
});