import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    categories: [],
    status: 'idle',
    error: null
}

const API_URL = 'http://localhost:3001/categories'

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () =>{
    const response = await fetch(API_URL)
    return response.json()
})

export const createCategory = createAsyncThunk('categories/createCategory' , async (task) => {
    const response = await fetch(API_URL,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(category)
    })
    return response.json()
})



export const deleteCategories = createAsyncThunk('categories/deleteCategory', async(id) =>{
    await fetch(`${API_URL}/${id}`, {method: 'DELETE'})
    return id
})

const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{ 
    },
    extraReducers: (builder) =>{
        builder
            


    }
})



export default categoriesSlice.reducer