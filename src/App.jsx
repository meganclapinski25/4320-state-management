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
      <h1>Tasks ({tasks.length})</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  )
  
}

export default App
