import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    tasks: [],
    status: 'idle',
    error: null
}

const API_URL = '/api/tasks'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () =>{
    const response = await fetch(API_URL)
    return response.json()
})

const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        
        
        addTask(state,action){
            state.tasks.push(action.payload)
        },


        deleteTask(state,action){
            state.tasks = state.tasks.filter(task =>task.id !== action.payload)
        },

        updateTask(state,action){
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? action.payload: task)
        }
    }
})

export const selectAllTasks = (state) => state.tasks.tasks

export const selectTaskById = (id) => (state) => state.tasks.tasks.find(t => t.id === id)


export const {addTask, deleteTask, updateTask} = tasksSlice.actions



export default tasksSlice.reducer