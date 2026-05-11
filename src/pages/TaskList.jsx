import { Link } from 'react-router-dom'
import TaskItem from '../components/TaskItem'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import Sidebar from '../components/Sidebar'

const API_URL = 'http://localhost:3001/tasks'

function TaskList() {
  const queryClient = useQueryClient()


  const { data: tasks =[], isLoading, isError, error} = useQuery({
    queryKey: ['tasks'],
    queryFn: () => fetch(API_URL).then(res => res.json())
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => fetch(`${API_URL}/${id}`, {method: 'DELETE'}),
    onSuccess: () =>  queryClient.invalidateQueries({queryKey: ['tasks']})
  })
  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

  if (isLoading) return <p className='state-message'>Loading Tasks</p>
  if(isError) return <p className='state-message'>Error : {error.message}</p>

  return (
    <div className="app-layout">
      <Sidebar />
      <main className ="app-main">
        <div className="task-list-header">
          <h1>My Tasks <span className="task-count">{tasks.length}</span></h1>
          <Link to="/tasks/new" className="btn-link">+ New Task</Link>
        </div>
       

        {tasks.length === 0 ? (
          <p className="state-message">No tasks yet. Create one to get started.</p>
        ) : (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} onDelete={handleDelete} />
          ))
        )}
      </main>
    </div>
  )
}

export default TaskList
