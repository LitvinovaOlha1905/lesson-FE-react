import React from 'react'
import RecipeCard from '../RecipeCard'
import s from './index.module.css'

export default function RecipesContainer({ recipes }) {
  return (
    <div className={s.container}>
      {
        recipes.map(el => <RecipeCard key={el.id} {...el} />)
      }
    </div>
  )
}
