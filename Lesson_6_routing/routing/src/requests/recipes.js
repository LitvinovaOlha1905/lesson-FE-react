export const getAllRecipes = (callback) => {
  fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(json => callback(json.recipes))
}

export const getSingleRecipe = (id, callback) => {
  fetch(`https://dummyjson.com/recipes/${id}`)
  .then(res => res.json())
  .then(json => callback(json))
}
