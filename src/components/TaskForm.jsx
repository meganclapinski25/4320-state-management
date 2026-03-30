function TaskForm({ formData, setFormData, handleSubmit, editingId, onCancel}) {
    return (
      <section>
        <h1>Tasks Tracker</h1>
      
        <section className={editingId ? 'editing' : ''}>
            <h2>{editingId ? 'Edit Task' : 'Add a Task'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder='Task Title'
                value={formData.title}
                onChange={(e)=>setFormData({...formData,title:e.target.value})}
                />
                <select
                value={formData.status}
                onChange={(e) => setFormData({...formData,status:e.target.value})}
                >
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
                </select>
                

                <button type="submit">{editingId ? 'Update Task' : 'Add Task'}</button>

                {editingId && (
                  <button type="button" onClick={onCancel}>Cancel</button>
                )}

            </form>
        </section>
      </section>
    )
  }
  
  export default TaskForm