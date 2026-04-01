import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskNew from './pages/TaskNew'


function App() {
  
  const [tasks, setTasks] = useState([])
  
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task =>task.id !==id))
  }

  const addTask = (task) =>{
    setTasks([...tasks,task])
  }

  return (
   <Routes>
    <Route path ="/" element={<Navigate to="/tasks" replace/> }/>
    <Route path="/tasks" element={<TaskList tasks={tasks} onDelete={deleteTask} />} />
    <Route path="/tasks/new" element={<TaskNew onCreate={addTask} />} />
   </Routes>
  )
  
}

export default App
