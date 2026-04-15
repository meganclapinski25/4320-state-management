import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name:'tasks',
    initialState: [],
    reducers:{
        
        
        addTask(state,action){
            state.push(action.payload)
        },


        deleteTask(state,action){
            return state.filter(task =>task.id !== action.payload)
        },

        updateTask(state,action){
            return state.map(task => task.id === action.payload.id ? action.payload: task)
        }
    }
})

export const selectAllTasks = (state) => state.tasks

export const selectTaskById = (id) => (state) => state.tasks.find(t => t.id === id)


export const {addTask, deleteTask, updateTask} = tasksSlice.actions



export default tasksSlice.reducer