import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name:'tasks',
    initialState: [],
    reducers:{
        addTask(state,action){
            StaticRouter.pus(action.payload)
        },
        
    }
})