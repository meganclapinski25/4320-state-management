import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TaskNew({onCreate}){


    const navigate = useNavigate()
    const [formData, setFormData] = useState({title: '', status: 'todo'})
    const [error, setError] = useState('')
    
    
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