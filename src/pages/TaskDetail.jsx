import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {selectTaskById, updateTask, deleteTask} from '../store/tasksSlice'


function TaskDetail (){
    const navigate = useNavigate()

    const { id } = useParams()

    const task = useSelector(selectTaskById(id))
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState ({title: task?.title || '', status: task?.status || "todo"})
    
    if(!task){
        return(
            <div>
                <h2>Task not Found</h2>
                <Link to="/tasks" className="btn-link">Return to task list</Link>
            </div>
        )
    }
    
    const handleSave = () =>{
        dispatch(updateTask({
            ...task,
            title:formData.title,
            status:formData.status,
            updatedAt: new Date().toISOString()
        }))
        setIsEditing(false)
    }

    return(
        <div>
            <Link to="/tasks" className= "btn-link" style={{marginBottom: '1rem'}}>Back</Link>

            {isEditing ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '0.75rem', maxWidth: '400px', margin: '0 auto' }}>                    <input
                     type="text"
                     value={formData.title}
                     
                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                     <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>



                    </select>

                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', justifyContent: 'center' }}>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>

                </div>

            ):(
                <div>
                     <h1>{task.title}</h1>
                        <p>Status: {task.status}</p>
                        <p>Created: {new Date(task.createdAt).toLocaleString('en-US', {timeZone:'America/Los_Angeles', dateStyle: 'short', timeStyle: 'short'})}</p>
                        <p>Updated: {new Date(task.updatedAt).toLocaleString('en-US', {timeZone:'America/Los_Angeles', dateStyle: 'short', timeStyle: 'short'})}</p>
                        <div style={{display:'flex', gap: '0.75rem', marginTop: '1rem', alignItems:'center', justifyContent: 'center'  }}>
                            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
                            <button onClick={()=>{dispatch(deleteTask(task.id)); navigate('/tasks')}} className="delete-btn ">Delete</button>
                        </div>
                </div>
            )}
           
        </div>
        
    )
}

export default TaskDetail