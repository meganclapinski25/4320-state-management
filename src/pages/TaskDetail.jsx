import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";



function TaskDetail ({tasks, onUpdate, onDelete}){
    const navigate = useNavigate()

    const { id } = useParams()

    const task = tasks.find(t=>t.id === id)


    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState ({title: task?.title || '', status: task?.status || "todo"})
    
    if(!task){
        return(
            <div>
                <h2>Task not Found</h2>
                <Link to="/tasks">Return to task list</Link>
            </div>
        )
    }
    

    return(
        <div>
            <Link to="/tasks">Back</Link>
            <h1>{task.title}</h1>
            <p>Status: {task.status}</p>
            <p>Created: {task.createdAt}</p>
            <p>Updated: {task.updatedAt}</p>

            <button onClick={()=>{onDelete(task.id); navigate('/tasks')}}>Delete</button>
        </div>
    )
}

export default TaskDetail