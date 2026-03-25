import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'



function App() {
  
  const [tasks, setTasks] = useState([])

  const[formData, setFormData] = useState({title: '', status:'todo'})

  const [editingId, setEditingId] = useState(null)

  console.log(tasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      setTasks(tasks.map(task =>
        task.id === editingId
          ? { ...task, title: formData.title, status: formData.status }
          : task
      ))
      setEditingId(null)
    }else{
      const newTask = {
        id: crypto.randomUUID(),
        title: formData.title,
        status: formData.status,
      }
      setTasks([...tasks, newTask])
    }
    

    setFormData({ title: '', status: 'todo' })
  }

  const handleDelete = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleEdit = (task) => {
    setEditingId(task.id)
    setFormData({ title: task.title, status: task.status })
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
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </section>
    </div>
  )
  
}

export default App
