import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './tasksSlice'
import categoriesReducer from './categoriesSlice'

const store = configureStore({
    reducer: {
        tasks:taskReducer,
        categories: categoriesReducer
    }
})


export default store 