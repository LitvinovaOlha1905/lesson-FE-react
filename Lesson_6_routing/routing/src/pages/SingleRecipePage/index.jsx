import React, { useEffect, useState } from 'react'
import { getSingleRecipe } from '../../requests/recipes';
import { useParams } from 'react-router-dom';

export default function SingleRecipePage() {

  const { recipe_id } = useParams();

  const [ singleRecipe, setSingleRecipe ] = useState([]);

  useEffect(() => {
    getSingleRecipe(recipe_id, setSingleRecipe)
  }, []);

  const { name, ingredients, image, instructions } = singleRecipe;

  return (
    <div>
      <img src={image} alt={name} />
      <p>{ name }</p>
      <p>Ingredients:</p>
      <ul>
        {
          ingredients &&
          ingredients.map(el => <li key={el}>{el}</li>)
        }
      </ul>
    </div>
  )
}
