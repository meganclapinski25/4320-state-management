function TaskItem({ task, onDelete, onEdit }) {
    return (
      <div className="task-item">
        <p>{task.title}</p>
        <p>{task.status}</p>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
        <button className="edit-btn" onClick={() => onEdit(task)}>Edit</button>
      </div>
    )
  }
  
  export default TaskItem