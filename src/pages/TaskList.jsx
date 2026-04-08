import { Link } from 'react-router-dom'
import TaskItem from '../components/TaskItem'

function TaskList({tasks, onDelete}) {

  return(
    <div>
       <h1>Task List</h1>
       <h2>Amount of Tasks {tasks.length}</h2>
       <Link to= "/tasks/new" className="btn-link">New Task</Link>
       {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete}/>
        ))}
    </div>
   
  )
}
export default TaskList