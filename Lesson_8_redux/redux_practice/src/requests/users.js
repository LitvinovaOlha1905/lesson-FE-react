import { loadSingleUserAction } from "../store/reducers/singleUserReducer"
import { loadUsersAction } from "../store/reducers/usersReducer"

export const getAllUsers = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => dispatch(loadUsersAction(json)))
}

export const getSingleUser = user_id => {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
      .then(res => res.json())
      .then(json => dispatch(loadSingleUserAction(json)))
  }
}
