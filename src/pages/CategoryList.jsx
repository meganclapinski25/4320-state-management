import { useState } from 'react'
import { PALETTE } from '../utils/palette'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'


const API_URL = 'http://localhost:3001/categories'


function CategoryList(){
   const queryClient = useQueryClient()


    const [name, setName] = useState('')

    const { data: categories = [], isLoading, isError, error } = useQuery({
      queryKey: ['categories'],
      queryFn: () => fetch(API_URL).then(res => res.json())
    })

    const createMutation = useMutation({
      mutationFn: (category) => fetch(API_URL,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(category)
      }),
      onSuccess: () =>{
        queryClient.invalidateQueries({queryKey: ['categories']})
        setName('')
      }
    })

    const deleteMutation = useMutation({
      mutationFn: (id) => fetch(`${API_URL}/${id}`, {method: 'DELETE'}),
      onSuccess: () => queryClient.invalidateQueries({queryKey: ['categories']})
    })
    

    const handleCreate = async () =>{
        // pick a random color from the palette, preferring ones not already in use
        const used = new Set(categories.map(c => c.color))
        const available = PALETTE.filter(c => !used.has(c))
        const pool = available.length > 0 ? available : PALETTE
        const color = pool[Math.floor(Math.random() * pool.length)]

        await dispatch(createCategory({ name, color }))
        setName('')
    }

    
    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Error: {error}</p>
    if (!Array.isArray(categories)) return <p>Loading...</p>
    return(
        <div>
            <h1>Categories</h1>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="New category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="btn-primary" onClick={handleCreate}>Add</button>
            </div>

            {categories.map(category => (
            <div key={category.id} className="task-item">
              <span className="cat-tag" style={{ background: category.color }}>
                {category.name}
              </span>
              <span style={{ flex: 1 }} />
              <button className="delete-btn" onClick={() => handleDelete(category.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
    )

}

export default CategoryList