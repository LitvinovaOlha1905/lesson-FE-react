import React, { useEffect, useState } from 'react'
import RecipesContainer from '../../components/RecipesContainer'
import { getAllRecipes } from '../../requests/recipes'

export default function RecipesPage() {

  const [ recipes, setRecipes ] = useState([]);

  useEffect(() => {
    getAllRecipes(setRecipes)
  }, []);
 
  return (
    <div>
      <RecipesContainer recipes={recipes} />
    </div>
  )
}
