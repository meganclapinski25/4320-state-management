import { Link } from 'react-router-dom'
import TaskItem from '../components/TaskItem'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'

const API_URL = 'http://localhost:3001/tasks'

function TaskList() {
  const queryClient = useQueryClient()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  if (status === 'loading') return <p className="state-message">Loading tasks...</p>
  if (status === 'failed') return <p className="state-message">Error: {error}</p>

  return (
    <div className="app-layout">
      <Sidebar />
      <main className ="app-main">
        <div className="task-list-header">
          <h1>My Tasks <span className="task-count">{tasks.length}</span></h1>
          <Link to="/tasks/new" className="btn-link">+ New Task</Link>
        </div>
       

        {tasks.length === 0 ? (
          <p className="state-message">No tasks yet. Create one to get started.</p>
        ) : (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} onDelete={handleDelete} />
          ))
        )}
      </main>
    </div>
  )
}

export default TaskList
