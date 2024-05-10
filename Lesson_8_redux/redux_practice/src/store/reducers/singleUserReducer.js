const LOAD_SINGLE_USER = 'LOAD_SINGLE_USER';

export const loadSingleUserAction = user => ({ type: LOAD_SINGLE_USER, payload: user });

export const singleUserReducer = (state={}, action) => {
  if(action.type === LOAD_SINGLE_USER){
    return action.payload
  }
  return state
}
