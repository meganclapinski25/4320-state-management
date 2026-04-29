import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../store/tasksSlice'
import { fetchCategories, selectAllCategories } from '../store/categoriesSlice'

function TaskNew() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ title: '', status: 'todo', categoryID: '' })
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const status = useSelector((state) => state.tasks.status)
  const categories = useSelector(selectAllCategories)
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.title.length < 3 || formData.title.length > 60) {
      setError('Title must be between 3 and 60 characters.')
      return
    }

    const newTask = {
      title: formData.title,
      status: formData.status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      categoryID: formData.categoryID,
    }

    await dispatch(createTask(newTask))
    navigate('/tasks')
  }

  return (
    <div className="form-card">
      <h1>Create Task</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="What needs to be done?"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          {error && <p className="error-msg">{error}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={formData.categoryId}
            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
          >
            <option value="">No Category</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Saving...' : 'Save Task'}
          </button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/tasks')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskNew
