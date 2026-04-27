import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../store/tasksSlice'

function TaskNew({}){


    const navigate = useNavigate()
    const [formData, setFormData] = useState({title: '', status: 'todo'})
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    
    const status = useSelector((state) => state.tasks.status)


    const handleSubmit = (e) => {
        e.preventDefault()

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

        dispatch(createTask(newTask))
        navigate('/tasks')

    }

    const handleCancel =()=>{
        navigate('/tasks')
    }

    



    return(
        <div style={{maxWidth: '400px', margin:'0 auto'}}>
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

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Saving...' : 'Save Task'}
                    </button>
                    <button type="button" onClick ={handleCancel}>Cancel</button>
                </div>


            </form>
                

        </div>
    )
}

export default TaskNew