import { Link } from 'react-router-dom'
import TaskItem from '../components/TaskItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, selectAllTasks } from '../store/tasksSlice'

function TaskList() {

  const tasks = useSelector(selectAllTasks)
  const dispatch = useDispatch()

  const handleDelete = (id) =>{
    dispatch(deleteTask(id))
  }

  return(
    <div>
       <h1>Task List</h1>
       <h2>Amount of Tasks {tasks.length}</h2>
       <Link to= "/tasks/new" className="btn-link">New Task</Link>
       {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete}/>
        ))}
    </div>
   
  )
}
export default TaskList