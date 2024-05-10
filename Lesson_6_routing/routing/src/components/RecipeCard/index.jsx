import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function RecipeCard({ id, name, image }) {
  return (
    <Link to={`/recipe/${id}`}>
      <div className={s.card}>
        <img src={image} alt={name} />
        <p>{ name }</p>
      </div>
    </Link>
  )
}
