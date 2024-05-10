import { loadTodosAction } from "../store/reducers/todosReducer"

export const getAllTodos = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => dispatch(loadTodosAction(json)))
}
