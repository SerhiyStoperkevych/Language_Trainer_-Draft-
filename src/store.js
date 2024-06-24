import langReducer from './features/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        languages: langReducer
    }
});
