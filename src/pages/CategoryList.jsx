import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { createCategory, deleteCategory, selectAllCategories } from '../store/categoriesSlice'
import { useEffect, useState } from 'react'

function CategoryList(){
    const categories = useSelector(selectAllCategories)
    const dispatch = useDispatch()
    const status = useSelector((state) => state.categories.status)
    const error = useSelector((state) => state.categories.error)


    const [name, setName] = useState('')

}

export default CategoryList