import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

export const CategoryCard = ({category}) => {
  return (
    <div className='category-card'>
      <Link className='category-title' to={`/posts/category/${category.title}`}> 
      <img src={category.image} alt={category.title}/>
      <h3>{category.title}</h3>
      </Link>
    </div>
  )
}
