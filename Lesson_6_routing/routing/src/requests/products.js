export const getProductsByCategory = (id, callback) => {
  fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    .then(res => res.json())
    .then(json => callback(json))
}
