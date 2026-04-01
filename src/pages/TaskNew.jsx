import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TaskNew({onCreate}){


    const navigate = useNavigate()
    const [formData, setFormData] = useState({title: '', status: 'todo'})
    const [error, setError] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDedault()

        if (formData.title.length <3 || formData.title.length>60){
            setError('Title must be between 3 and 60 chars')
            return
        
        }

        const newTask ={
            id: crypto.randomUUID(),
            title: formData.title,
            status: formData.status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        onCreate(newTask)
        navigate('/tasks')

    }

    const handleCancel =()=>{
        navigate('/tasks')
    }



    return(
        <div>
            <h1> Create Task</h1>
            <form onSubmit ={handleSubmit}>
                <input
                    type = "text"
                    placeholder='Task Title'
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />

                {error && <p>{error}</p>}


                <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status:e.target.value})}
                >
                    <option value = "todo">Todo</option>
                    <option value = "doing">Doing</option>
                    <option value = "done">Done</option>
                </select>

                <button type="submit">Save Task</button>
                <button type="button" onClick ={handleCancel}>Cancel</button>



            </form>
                

        </div>
    )
}

export default TaskNew