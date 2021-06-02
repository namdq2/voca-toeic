import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import vocabularyReducer from './vocabulary/vocabularySlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        vocabulary: vocabularyReducer,
    },
});