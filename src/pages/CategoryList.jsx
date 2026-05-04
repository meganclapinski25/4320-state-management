import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, createCategory, deleteCategories, selectAllCategories } from '../store/categoriesSlice'
import { useEffect, useState } from 'react'
import { PALETTE } from '../utils/palette'


function CategoryList(){
    const categories = useSelector(selectAllCategories)
    const dispatch = useDispatch()
    const status = useSelector((state) => state.categories.status)
    const error = useSelector((state) => state.categories.error)


    const [name, setName] = useState('')
    const [color, setColor] = useState(PALETTE[0])


    useEffect(() =>{
        dispatch(fetchCategories())
    }, [dispatch])


    const handleCreate = async () =>{
        await dispatch(createCategory({name, color}))
        setName('')
    }

    const handleDelete = async(id) =>{
        await dispatch(deleteCategories(id))
    }
    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Error: {error}</p>
    if (!Array.isArray(categories)) return <p>Loading...</p>
    return(
        <div>
            <h1>Categories</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="New category name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleCreate}>Add</button>
              </div>
              <div className="swatch-row">
                {PALETTE.map(c => (
                  <button
                    type="button"
                    key={c}
                    className={'swatch' + (c === color ? ' selected' : '')}
                    style={{ background: c }}
                    onClick={() => setColor(c)}
                    aria-label={`Color ${c}`}
                  />
                ))}
              </div>
            </div>

            {categories.map(category => (
              <div key={category.id} className="task-item">
                <span className="cat-dot" style={{ background: category.color }} >
                  {category.name}
                </span>
                <span style={{ flex:1 }}/>
                <button className="delete-btn" onClick={() => handleDelete(category.id)}>Delete</button>
              </div>
            ))}
        </div>
    )

}

export default CategoryList