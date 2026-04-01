import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import TaskList from './pages/TaskList'


function App() {
  
  const [tasks, setTasks] = useState([])
  
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task =>task.id !==id))
  }

  return (
   <Routes>
    <Route path ="/" element={<Navigate to="/tasks" replace/> }/>
    <Route path="/tasks" element={<TaskList tasks={tasks} onDelete={deleteTask} />} />
   </Routes>
  )
  
}

export default App
