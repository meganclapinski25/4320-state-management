import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTaskById, updateTask, deleteTask } from '../store/tasksSlice'
import { selectAllCategories, fetchCategories } from '../store/categoriesSlice'

function TaskDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const task = useSelector(selectTaskById(id))
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ title: task?.title || '', status: task?.status || 'todo' })

  const categories = useSelector(selectAllCategories)
  const taskCategory = categories.find(c => c.id ===task.categoryId)



  if (!task) {
    return (
      <div>
        <h2>Task not found</h2>
        <Link to="/tasks" className="btn-link" style={{ marginTop: '1rem' }}>Return to task list</Link>
      </div>
    )
  }

  const handleSave = () => {
    dispatch(updateTask({
      ...task,
      title: formData.title,
      status: formData.status,
      updatedAt: new Date().toISOString(),
    }))
    setIsEditing(false)
  }

  const formatDate = (iso) =>
    new Date(iso).toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'medium',
      timeStyle: 'short',
    })

  return (
    <div>
      <Link to="/tasks" className="back-link">Back to Tasks</Link>

      <div className="task-detail-card">
        {isEditing ? (
          <>
            <div className="task-edit-form">
              <div className="form-group">
                <label htmlFor="edit-title">Title</label>
                <input
                  id="edit-title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-status">Status</label>
                <select
                  id="edit-status"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="todo">Todo</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-primary" onClick={handleSave}>Save Changes</button>
              <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h1>{task.title}</h1>
            <span className={`status-badge status-${task.status}`}>{task.status}</span>

            <div className="task-meta">
              <p>Created: {formatDate(task.createdAt)}</p>
              <p>Updated: {formatDate(task.updatedAt)}</p>
            </div>

            <p>Category: {taskCategory ? taskCategory.name : 'None'}</p>

            <div className="task-detail-actions">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
              <button className="delete-btn" onClick={async () => {
                await dispatch(deleteTask(task.id))
                navigate('/tasks')
              }}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskDetail
