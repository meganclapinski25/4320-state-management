import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'



function TaskItem({ task, onDelete }) {
  const statusClass = `status-badge status-${task.status}`



  const categories = useSelector(selectAllCategories)
  const category = Array.isArray(categories)
    ? categories.find(c => String(c.id) === String(task.categoryId))
    : null
  return (
    <div className="task-item">
      <p className="task-title">{task.title}</p>
      {category && (
        <span className ="cat-tag" style= {{background:category.color}}>
          {category.name}
        </span>
      )}

      <span className={statusClass}>{task.status}</span>

      <div className="task-actions-row">
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
        <Link to={`/tasks/${task.id}`} className="edit-btn">Edit</Link>
      </div>
    </div>
  )
}

export default TaskItem
