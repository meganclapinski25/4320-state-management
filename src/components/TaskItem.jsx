import { Link } from 'react-router-dom'

function TaskItem({ task, onDelete }) {
  const statusClass = `status-badge status-${task.status}`

  return (
    <div className="task-item">
      <p className="task-title">{task.title}</p>
      <span className={statusClass}>{task.status}</span>
      <div className="task-actions-row">
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
        <Link to={`/tasks/${task.id}`} className="edit-btn">Edit</Link>
      </div>
    </div>
  )
}

export default TaskItem
