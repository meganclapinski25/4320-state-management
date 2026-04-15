
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskNew from './pages/TaskNew'
import TaskDetail from './pages/TaskDetail'


function App() {
  
  return (
   <Routes>
    <Route path ="/" element={<Navigate to="/tasks" replace/> }/>
    <Route path="/tasks" element={<TaskList />} />
    <Route path="/tasks/new" element={<TaskNew />} />
    <Route path="/tasks/:id" element={<TaskDetail/>}/>
   </Routes>
  )
  
}

export default App
