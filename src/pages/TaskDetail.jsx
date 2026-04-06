import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";



function TaskDetail ({tasks, onUpdate, onDelete}){
    const navigate = useNavigate()

    const { id } = useParams()

    const task = tasks.find(t=>t.id === id)
    

    return(
        <div>
            <h1>{task.title}</h1>
            <p>Status: {task.status}</p>
            <p>Created: {task.createdAt}</p>
            <p>Updated: {task.updatedAt}</p>

            <button onClick={()=>{onDelete(task.id); navigate('/tasks')}}>Delete</button>
        </div>
    )
}

export default TaskDetail