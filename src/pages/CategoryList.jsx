import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, createCategory, deleteCategory, selectAllCategories } from '../store/categoriesSlice'
import { useEffect, useState } from 'react'

function CategoryList(){
    const categories = useSelector(selectAllCategories)
    const dispatch = useDispatch()
    const status = useSelector((state) => state.categories.status)
    const error = useSelector((state) => state.categories.error)


    const [name, setName] = useState('')


    useEffect(() =>{
        dispatch(fetchCategories())
    }, [dispatch])


    const handleCreate = async () =>{
        await dispatch(createCategory({name}))
        setName('')
    }

    const handleDelete = async(id) =>{
        await dispatch(deleteCategory(id))
    }

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
      <button onClick={handleCreate}>Add</button>
    </div>

    {categories.map(category => (
      <div key={category.id} className="task-item">
        <p>{category.name}</p>
        <button className="delete-btn" onClick={() => handleDelete(category.id)}>Delete</button>
      </div>
    ))}
        </div>
    )

}

export default CategoryList