import { useState } from 'react'
import './App.css'




function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Test Task',
      status: 'todo',
    }

  ])

  const[formData, setFormData] = useState({title: '', status:'todo'})
  console.log(tasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: crypto.randomUUID(),
      title: formData.title,
      status: formData.status,
    }
    setTasks([...tasks, newTask])
    setFormData({ title: '', status: 'todo' })
  }

  return (
    <div>
      <h1>Tasks Tracker</h1>
      
      <section>
          <h2> Add a Task</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Task Title'
              value={formData.title}
              onChange={(e)=>setFormData({...formData,title:e.target.value})}
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData,status:e.target.value})}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
              

            <button type="submit">Add Task</button>
          </form>
      </section>

      <section> 
        <h2> Tasks ({tasks.length}) </h2>
        {tasks.map(task => (
          <div key={task.id}>
            <p>{task.title}</p>
            <p>{task.status}</p>
          </div>
        ))}
      </section>
    </div>
  )
  
}

export default App
