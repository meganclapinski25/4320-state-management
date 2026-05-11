import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'



function TaskItem({ task, onDelete }) {
  
  const statusClass = `status-badge status-${task.status}`

  const {data: categories =[] } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('http://localhost:3001/categories').then(res => res.json())
  })

  


  const category = categories.find(c => String(c.id) === String(task.categoryId))
  
  
  
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
