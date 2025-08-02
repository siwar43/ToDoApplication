import { configureStore } from '@reduxjs/toolkit'
import ToDoSlice from './ToDoSlice/ToDoSlice';

export const store = configureStore({
    reducer: {
        todo: ToDoSlice,
    },
})