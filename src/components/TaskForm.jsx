function TaskForm({ formData, setFormData, handleSubmit, editingId }) {
    return (
      <section>
        <h1>Tasks Tracker</h1>
      
        <section>
            <h2> Add a Task</h2>
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
                

                <button type="submit">Add Task</button>
            </form>
        </section>
      </section>
    )
  }
  
  export default TaskForm