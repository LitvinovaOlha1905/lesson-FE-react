export const getAllCategories = (callback) => {
  fetch('https://api.escuelajs.co/api/v1/categories/')
    .then(res => res.json())
    .then(json => callback(json))
}

// ВИДЫ ЗАПРОСОВ

// GET - получение информации
// POST - добавление информации
// DELETE - удаление информации
// PUT - полное изменение информации (замена)
// PATCH - частичное изменение информации
