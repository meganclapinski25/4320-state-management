import { useState } from 'react'
import './App.css'
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'


function App() {
  
  const [tasks, setTasks] = useState([])
  

  return (
   <Routes>
    <Route path ="/" element={<Navigate to="/tasks" replace/> }/>
    <Route path="/tasks" element={<TaskList tasks={tasks} onDelete={deleteTask} />} />
   </Routes>
  )
  
}

export default App
