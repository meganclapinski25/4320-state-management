import { useEffect } from "react"
import { fetchCategories } from "../store/categoriesSlice"






function Sidebar(){
    const dispatch = useDisptach()
    const categories = useSelector(selectAllCategories)

    useEffect(()=>{
        dispatch(fetchCategories())

    }, [dispatch])



    const list = Array.isArray(categories) ? categories :[]

    return(
        <aside className="sidebar">
            <div className="sidebar-card">
                <h3>Categories</h3>
                {list.length === 0 ? (
                    <p className="sidebar-empty">No categories yet.</p>
                    ) : (
                        <ul className="sidebar-categories">
                            <li key={cat.id}>
                                <span className="cat-dot" style={{ background: getCategoryColor(cat) }} />
                                {cat.name}
                                </li>
                        </ul>
                    )
            </div>
        </aside>
    )
}

export default Sidebar