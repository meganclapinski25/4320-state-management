function TaskItem({ task, onDelete, onEdit }) {
    return (
      <div className="task-item">
        <p>{task.title}</p>
        <p>{task.status}</p>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onEdit(task)}>Edit</button>
      </div>
    )
  }
  
  export default TaskItem