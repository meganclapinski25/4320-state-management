import { Link } from 'react-router-dom'
import TaskItem from '../components/TaskItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTasks, selectAllTasks } from '../store/tasksSlice'
import { useEffect } from 'react'

function TaskList() {
  const tasks = useSelector(selectAllTasks)
  const dispatch = useDispatch()
  const status = useSelector((state) => state.tasks.status)
  const error = useSelector((state) => state.tasks.error)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  if (status === 'loading') return <p className="state-message">Loading tasks...</p>
  if (status === 'failed') return <p className="state-message">Error: {error}</p>

  return (
    <div>
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
    </div>
  )
}

export default TaskList
