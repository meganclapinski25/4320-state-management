import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'




function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([
    'id',
    'to-do',
  ])
  console.log(tasks)

  return (
    <div>
      <h1>Tasks Tracker</h1>
      
      <section>
          <h2> Add a Task</h2>
          <p>Form will go here</p>
      </section>

      <section> 
        <h2> Tasks (0) </h2>
        <p>List of tasks will go here </p>
      </section>
    </div>
  )
  
}

export default App
