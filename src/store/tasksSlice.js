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

export const createTask = createAsyncThunk('tasks/createTask' , async (task) => {
    const response = await fetch(API_URL,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    })
    return response.json()
})

export const updateTask = createAsyncThunk('tasks/updateTask', async(task) =>{
    const response = await fetch(`${API_URL}/${task.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)

    })
    return response.json()
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id) =>{
    await fetch(`${API_URL}/${id}`, {method: 'DELETE'})
    return id
})

const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        
        
        
    }
})

export const selectAllTasks = (state) => state.tasks.tasks

export const selectTaskById = (id) => (state) => state.tasks.tasks.find(t => t.id === id)

export default tasksSlice.reducer