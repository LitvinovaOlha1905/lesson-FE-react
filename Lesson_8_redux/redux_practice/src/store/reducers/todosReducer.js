const LOAD_TODOS = 'LOAD_TODOS';

export const loadTodosAction = (users) => ({ type: LOAD_TODOS, payload: users }); 

export const todosReducer = (state=[], action) => {
  if (action.type === LOAD_TODOS){
    return action.payload
  }
  return state
}
