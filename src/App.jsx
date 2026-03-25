import { useState } from 'react'
import './App.css'




function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Test Task',
      status: 'todo',
    }

  ])

  const[formData, setFormData] = useState({title: '', status:'todo'})
  console.log(tasks)

  return (
    <div>
      <h1>Tasks Tracker</h1>
      
      <section>
          <h2> Add a Task</h2>
          <p>Form will go here</p>
      </section>

      <section> 
        <h2> Tasks ({tasks.length}) </h2>
        <p>List of tasks will go here </p>
      </section>
    </div>
  )
  
}

export default App
