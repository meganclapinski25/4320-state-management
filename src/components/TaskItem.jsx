import { Link } from "react-router-dom"


function TaskItem({ task, onDelete }) {
    return (
      <div className="task-item">
        <p>{task.title}</p>
        <p>{task.status}</p>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
        <Link to={`/tasks/${task.id}`} className="edit-btn"> Edit</Link>
      </div>
    )
  }
  
  export default TaskItem