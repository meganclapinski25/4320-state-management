import { useState } from 'react'
import { PALETTE } from '../utils/palette'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'


const API_URL = 'http://localhost:3001/categories'


function CategoryList(){
   const queryClient = useQueryClient()


    const [name, setName] = useState('')
    const [selectedColor, setSelectedColor] = useState(PALETTE[0])

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
        setSelectedColor(PALETTE[0])
      }
    })

    const deleteMutation = useMutation({
      mutationFn: (id) => fetch(`${API_URL}/${id}`, {method: 'DELETE'}),
      onSuccess: () => queryClient.invalidateQueries({queryKey: ['categories']})
    })
    

    const handleCreate = () => {
        createMutation.mutate({ name, color: selectedColor })
    }

    
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>
    if (!Array.isArray(categories)) return <p>Loading...</p>
    return(
        <div>
            <h1>Categories</h1>
            <div style={{ maxWidth: '480px', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="New category name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="btn-primary" onClick={handleCreate} disabled={createMutation.isPending}>
                  {createMutation.isPending ? 'Adding...' : 'Add'}
                </button>
              </div>
              <div className="swatch-row">
                {PALETTE.map(color => (
                  <button
                    key={color}
                    className={`swatch${selectedColor === color ? ' selected' : ''}`}
                    style={{ background: color }}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {categories.map(category => (
            <div key={category.id} className="task-item">
              <span className="cat-tag" style={{ background: category.color }}>
                {category.name}
              </span>
              <span style={{ flex: 1 }} />
              <button className="delete-btn" onClick={() => deleteMutation.mutate(category.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
    )

}

export default CategoryList