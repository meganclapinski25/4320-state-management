import { useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, selectAllCategories } from '../store/categoriesSlice'






function Sidebar(){
    const dispatch = useDispatch()
    const categories = useSelector(selectAllCategories)

    useEffect(()=>{
        dispatch(fetchCategories())

    }, [dispatch])



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
                    {cat.name}
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