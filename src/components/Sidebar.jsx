import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'


function Sidebar(){
    

    const queryClient = useQueryClient()
    
    
    const {data: categories =[] } = useQuery({
      queryKey: ['categories'],
      queryFn: () => fetch('http://localhost:3001/categories').then(res => res.json())
    })

    const deleteMutation = useMutation({
      mutationFn: (id) => fetch(`http://localhost:3001/categories/${id}`, {method: 'DELETE'}),
      onSuccess: () => queryClient.invalidateQueries({queryKey:['categories']})
    })


    const list = Array.isArray(categories) ? categories :[]

    return (
        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>Categories</h3>
    
            {list.length === 0 ? (
              <p className="sidebar-empty">No categories yet.</p>
            ) : (
              <ul className="sidebar-categories">
                {list.map(cat => (
                  <li key={cat.id}>
                    <span
                      className="cat-dot"
                      style={{ background: cat.color }}
                    />
                    <span className = "cat-name">{cat.name}</span>
                    <button
                      className="cat-remove"
                      onClick={() => deleteMutation.mutate(cat.id)}
                    >
                      -
                    </button>
                  </li>
                ))}
              </ul>
            )}
    
            <Link to="/categories" className="sidebar-add-cat">+ Categories</Link>
          </div>
        </aside>
      )
    }

export default Sidebar