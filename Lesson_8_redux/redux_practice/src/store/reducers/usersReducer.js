const LOAD_USERS = 'LOAD_USERS';

export const loadUsersAction = (users) => ({ type: LOAD_USERS, payload: users }); 

export const usersReducer = (state=[], action) => {
  if (action.type === LOAD_USERS){
    return action.payload
  }
  return state
}
