import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'


function App() {
  
  const [tasks, setTasks] = useState([])
  const[formData, setFormData] = useState({title: '', status:'todo'})
  const [editingId, setEditingId] = useState(null)

  console.log(tasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === editingId) {
          return { ...task, title: formData.title, status: formData.status }
        }
        return task
      })
  
      setTasks(updatedTasks)
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

  const handleCancel = () => {
    setEditingId(null)
    setFormData({title: '', status: 'todo'})
  }

  return (
    <div>
      <TaskForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        editingId={editingId}
        onCancel={handleCancel}
      />

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
