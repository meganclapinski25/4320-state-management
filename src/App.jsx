import './App.css'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskNew from './pages/TaskNew'
import TaskDetail from './pages/TaskDetail'
import CategoryList from './pages/CategoryList'


function App() {
  return (
    <>
      <header className="app-header">
        <Link to="/tasks" className="app-header-brand">
          <span>✓</span> TaskBoard
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskNew />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/categories" element={<CategoryList />} />
      </Routes>
    </>
  )
}

export default App
